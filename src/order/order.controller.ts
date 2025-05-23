import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Order } from 'src/schemas/order.schema';
import { CreateOrderDto } from 'src/dto/order/create-order.dto';
import { GetOrdersDto } from 'src/dto/order/get-orders.dto';
import { ApproveOrderDto } from 'src/dto/order/approve-order.dto';
import { AcceptOrderDto } from 'src/dto/order/accept-order.dto';
import { updateOrderStatusDto } from 'src/dto/order/update-status.dto';
import { CancelOrderDto } from 'src/dto/order/cancel-order.dto';

@ApiTags('Order')
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }
    @ApiOperation({ summary: 'Create order' })
    @ApiResponse({ status: 201, type: Order })
    @Post('/create')
    @HttpCode(201)
    async create(@Body() createOrderDto: CreateOrderDto) {
        return await this.orderService.createOrder(createOrderDto)
    }

    @ApiOperation({ summary: 'Get orders' })
    @ApiResponse({ status: 201, type: Request })
    @Post('/orders')
    @HttpCode(201)
    async requests(@Body() getOrdersDto: GetOrdersDto) {
        return await this.orderService.getOrders(getOrdersDto)
    }

    @ApiOperation({ summary: 'Approve order' })
    @ApiResponse({ status: 201, type: Order })
    @Post('/approve')
    @HttpCode(201)
    async approve(@Body() approveOrderDto: ApproveOrderDto) {
        return await this.orderService.approveOrder(approveOrderDto);
    }

    @ApiOperation({ summary: 'Accept order' })
    @ApiResponse({ status: 201, type: Order })
    @Post('/accept')
    @HttpCode(201)
    async accept(@Body() acceptOrderDto: AcceptOrderDto) {
        return await this.orderService.acceptOrder(acceptOrderDto);
    }

    @ApiOperation({ summary: 'Cancel order' })
    @ApiResponse({ status: 201, type: Order })
    @Post('/cancel')
    @HttpCode(201)
    async cancel(@Body() cancelOrderDto: CancelOrderDto) {
        return await this.orderService.cancelOrder(cancelOrderDto);
    }

    @ApiOperation({ summary: 'Update order status' })
    @ApiResponse({ status: 201, type: Order })
    @Post('/status/update')
    @HttpCode(201)
    async updateOrderStatus(@Body() updateOrderStatusDto: updateOrderStatusDto) {
        return await this.orderService.updateOrderStatus(updateOrderStatusDto);
    }
}
