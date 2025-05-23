"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("../schemas/order.schema");
const request_schema_1 = require("../schemas/request.schema");
let OrderService = class OrderService {
    constructor(orderModel, requestModel) {
        this.orderModel = orderModel;
        this.requestModel = requestModel;
    }
    async createOrder(createOrderDto) {
        const order = await this.orderModel.findOne({ poNumber: createOrderDto.poNumber });
        if (order)
            throw new common_1.HttpException('Order with this number already exists', common_1.HttpStatus.BAD_REQUEST);
        const createdOrder = await this.orderModel.create(createOrderDto);
        if (!createdOrder)
            throw new common_1.HttpException('Order has not been created', common_1.HttpStatus.BAD_REQUEST);
        const request = await this.requestModel.findOne({ requestNumber: createOrderDto.requestNumber });
        if (!request)
            throw new common_1.HttpException('Request is not exist', common_1.HttpStatus.BAD_REQUEST);
        const updatedItems = await request.items.map((requestItem) => {
            for (let index = 0; index < createOrderDto.items.length; index++) {
                const orderItem = createOrderDto.items[index];
                if (requestItem.pn === orderItem.pn) {
                    requestItem.poRef = createOrderDto.poNumber;
                }
            }
            return requestItem;
        });
        await this.requestModel.findOneAndUpdate({ requestNumber: createOrderDto.requestNumber }, { items: updatedItems });
        return createdOrder;
    }
    async getOrders(getOrdersDto) {
        if (!getOrdersDto.searchText) {
            const ordersNumber = await this.orderModel.find().count();
            if (!ordersNumber)
                throw new common_1.HttpException('Orders not found', common_1.HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getOrdersDto.page === 1 ? 0 : (getOrdersDto.page - 1) * getOrdersDto.ordersAtPage;
            const orders = await this.orderModel
                .find({ status: getOrdersDto.statusFilter })
                .skip(numberUnitsToScip)
                .limit(getOrdersDto.ordersAtPage);
            if (!orders.length)
                throw new common_1.HttpException('Orders not found', common_1.HttpStatus.BAD_REQUEST);
            return {
                totalPages: Math.ceil(ordersNumber / getOrdersDto.ordersAtPage),
                currentPage: getOrdersDto.page,
                orders: orders
            };
        }
        const orders = await this.orderModel.find(({
            status: getOrdersDto.statusFilter,
            pn: { $regex: getOrdersDto.searchText }
        }));
        if (!orders.length)
            throw new common_1.HttpException('Orders not found', common_1.HttpStatus.BAD_REQUEST);
        return {
            totalPages: Math.ceil(+orders.length / getOrdersDto.ordersAtPage),
            currentPage: getOrdersDto.page,
            orders: orders
        };
    }
    async approveOrder(approveOrderDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate({ poNumber: approveOrderDto.poNumber }, {
            status: 'approved',
            approvedBy: approveOrderDto.approvedBy,
            approvedDate: date.toISOString().split('T')[0],
        });
        if (!order)
            throw new common_1.HttpException('Order is not exists', common_1.HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'approved',
            remark: '',
            user: approveOrderDto.approvedBy
        });
        await order.save();
        const updatedOrder = await this.orderModel.findOne({ poNumber: approveOrderDto.poNumber });
        return updatedOrder;
    }
    async acceptOrder(acceptOrderDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate({ poNumber: acceptOrderDto.poNumber }, {
            status: 'accepted',
            acceptedBy: acceptOrderDto.acceptedBy,
            approvedDate: date.toISOString().split('T')[0],
        });
        if (!order)
            throw new common_1.HttpException('Order is not exists', common_1.HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'accepted',
            remark: '',
            user: acceptOrderDto.acceptedBy
        });
        await order.save();
        const updatedOrder = await this.orderModel.findOne({ poNumber: acceptOrderDto.poNumber });
        return updatedOrder;
    }
    async cancelOrder(cancelOrderDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate({ poNumber: cancelOrderDto.poNumber }, {
            status: 'cancelled',
            approvedDate: date.toISOString().split('T')[0],
        });
        if (!order)
            throw new common_1.HttpException('Order is not exists', common_1.HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'cancelled',
            remark: '',
            user: cancelOrderDto.canceledBy
        });
        await order.save();
        const request = await this.requestModel.findOne({ requestNumber: order.requestNumber });
        if (!request)
            throw new common_1.HttpException('Request is not exist', common_1.HttpStatus.BAD_REQUEST);
        const updatedItems = await request.items.map((requestItem) => {
            for (let index = 0; index < order.items.length; index++) {
                const orderItem = order.items[index];
                if (requestItem.pn === orderItem.pn) {
                    requestItem.poRef = 'no';
                }
            }
            return requestItem;
        });
        await this.requestModel.findOneAndUpdate({ requestNumber: order.requestNumber }, { items: updatedItems });
        const updatedOrder = await this.orderModel.findOne({ poNumber: cancelOrderDto.poNumber });
        return updatedOrder;
    }
    async updateOrderStatus(updateOrderStatusDto) {
        const date = new Date();
        const order = await this.orderModel.findOneAndUpdate({ poNumber: updateOrderStatusDto.poNumber }, { status: updateOrderStatusDto.status });
        if (!order)
            throw new common_1.HttpException('Order is not exists', common_1.HttpStatus.BAD_REQUEST);
        await order.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: updateOrderStatusDto.status,
            remark: updateOrderStatusDto.remark,
            user: updateOrderStatusDto.user
        });
        await order.save();
        const updatedOrder = await this.orderModel.findOne({ poNumber: updateOrderStatusDto.poNumber });
        return updatedOrder;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, mongoose_1.InjectModel)(request_schema_1.Request.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map