import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AcceptOrderDto } from 'src/dto/order/accept-order.dto';
import { ApproveOrderDto } from 'src/dto/order/approve-order.dto';
import { CancelOrderDto } from 'src/dto/order/cancel-order.dto';
import { CreateOrderDto } from 'src/dto/order/create-order.dto';
import { GetOrdersDto } from 'src/dto/order/get-orders.dto';
import { updateOrderStatusDto } from 'src/dto/order/update-status.dto';
import { Order } from 'src/schemas/order.schema';
import { Request } from 'src/schemas/request.schema';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name)
        private readonly orderModel: Model<Order>,
        @InjectModel(Request.name)
        private readonly requestModel: Model<Request>,
    ) { }

    async createOrder(createOrderDto: CreateOrderDto) {
        const order = await this.orderModel.findOne({ poNumber: createOrderDto.poNumber });
        if (order) throw new HttpException('Order with this number already exists', HttpStatus.BAD_REQUEST);
        const createdOrder = await this.orderModel.create(createOrderDto)
        if (!createdOrder) throw new HttpException('Order has not been created', HttpStatus.BAD_REQUEST);

        const request = await this.requestModel.findOne({ requestNumber: createOrderDto.requestNumber });
        if (!request) throw new HttpException('Request is not exist', HttpStatus.BAD_REQUEST);

        const updatedItems = await request.items.map((requestItem: any) => {

            for (let index = 0; index < createOrderDto.items.length; index++) {
                const orderItem = createOrderDto.items[index];
                if (requestItem.pn === orderItem.pn) {
                    requestItem.poRef = createOrderDto.poNumber;
                }
            }
            return requestItem
        });

        // request item ref update
        await this.requestModel.findOneAndUpdate(
            { requestNumber: createOrderDto.requestNumber },
            { items: updatedItems }) as any;

        return createdOrder;
    }

    async getOrders(getOrdersDto: GetOrdersDto) {
        if (!getOrdersDto.searchText) {
            const ordersNumber = await this.orderModel.find().count();
            if (!ordersNumber) throw new HttpException('Orders not found', HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getOrdersDto.page === 1 ? 0 : (getOrdersDto.page - 1) * getOrdersDto.ordersAtPage;

            const orders = await this.orderModel
                .find({ status: getOrdersDto.statusFilter })
                .skip(numberUnitsToScip)
                .limit(getOrdersDto.ordersAtPage);

            if (!orders.length) throw new HttpException('Orders not found', HttpStatus.BAD_REQUEST);
            return {
                totalPages: Math.ceil(ordersNumber / getOrdersDto.ordersAtPage),
                currentPage: getOrdersDto.page,
                orders: orders
            };
        }

        const orders = await this.orderModel.find(({
            status: getOrdersDto.statusFilter,
            pn: { $regex: getOrdersDto.searchText, $options: 'i' }
        }));

        if (!orders.length) throw new HttpException('Orders not found', HttpStatus.BAD_REQUEST);

        return {
            totalPages: Math.ceil(+orders.length / getOrdersDto.ordersAtPage),
            currentPage: getOrdersDto.page,
            orders: orders
        };
    }

    async approveOrder(approveOrderDto: ApproveOrderDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate(
            { poNumber: approveOrderDto.poNumber },
            {
                status: 'approved',
                approvedBy: approveOrderDto.approvedBy,
                approvedDate: date.toISOString().split('T')[0],
            }
        );

        if (!order) throw new HttpException('Order is not exists', HttpStatus.BAD_REQUEST);

        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'approved',
            remark: '',
            user: approveOrderDto.approvedBy
        })
        await order.save();


        const updatedOrder = await this.orderModel.findOne({ poNumber: approveOrderDto.poNumber });
        return updatedOrder;
    }

    async acceptOrder(acceptOrderDto: AcceptOrderDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate(
            { poNumber: acceptOrderDto.poNumber },
            {
                status: 'accepted',
                acceptedBy: acceptOrderDto.acceptedBy,
                approvedDate: date.toISOString().split('T')[0],
            }
        );

        if (!order) throw new HttpException('Order is not exists', HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'accepted',
            remark: '',
            user: acceptOrderDto.acceptedBy
        })

        await order.save();

        const updatedOrder = await this.orderModel.findOne({ poNumber: acceptOrderDto.poNumber });
        return updatedOrder;
    }

    async cancelOrder(cancelOrderDto: CancelOrderDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate(
            { poNumber: cancelOrderDto.poNumber },
            {
                status: 'cancelled',
                approvedDate: date.toISOString().split('T')[0],
            }
        );

        if (!order) throw new HttpException('Order is not exists', HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'cancelled',
            remark: '',
            user: cancelOrderDto.canceledBy
        })
        await order.save();

        const request = await this.requestModel.findOne({ requestNumber: order.requestNumber });
        if (!request) throw new HttpException('Request is not exist', HttpStatus.BAD_REQUEST);

        const updatedItems = await request.items.map((requestItem: any) => {

            for (let index = 0; index < order.items.length; index++) {
                const orderItem = order.items[index];
                if (requestItem.pn === orderItem.pn) {
                    requestItem.poRef = 'no';
                }
            }
            return requestItem
        });

        // request item ref update
        await this.requestModel.findOneAndUpdate(
            { requestNumber: order.requestNumber },
            { items: updatedItems }) as any;


        const updatedOrder = await this.orderModel.findOne({ poNumber: cancelOrderDto.poNumber });
        return updatedOrder;
    }

    async updateOrderStatus(updateOrderStatusDto: updateOrderStatusDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate({ poNumber: updateOrderStatusDto.poNumber },
            { status: updateOrderStatusDto.status }
        );

        if (!order) throw new HttpException('Order is not exists', HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: updateOrderStatusDto.status,
            remark: updateOrderStatusDto.remark,
            user: updateOrderStatusDto.user
        })
        await order.save();
        const updatedOrder = await this.orderModel.findOne({ poNumber: updateOrderStatusDto.poNumber });
        return updatedOrder;
    }

}
