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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_service_1 = require("./order.service");
const order_schema_1 = require("../schemas/order.schema");
const create_order_dto_1 = require("../dto/order/create-order.dto");
const get_orders_dto_1 = require("../dto/order/get-orders.dto");
const approve_order_dto_1 = require("../dto/order/approve-order.dto");
const accept_order_dto_1 = require("../dto/order/accept-order.dto");
const update_status_dto_1 = require("../dto/order/update-status.dto");
const cancel_order_dto_1 = require("../dto/order/cancel-order.dto");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async create(createOrderDto) {
        return await this.orderService.createOrder(createOrderDto);
    }
    async requests(getOrdersDto) {
        return await this.orderService.getOrders(getOrdersDto);
    }
    async approve(approveOrderDto) {
        return await this.orderService.approveOrder(approveOrderDto);
    }
    async accept(acceptOrderDto) {
        return await this.orderService.acceptOrder(acceptOrderDto);
    }
    async cancel(cancelOrderDto) {
        return await this.orderService.cancelOrder(cancelOrderDto);
    }
    async updateOrderStatus(updateOrderStatusDto) {
        return await this.orderService.updateOrderStatus(updateOrderStatusDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create order' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_1.Post)('/create'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get orders' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: Request }),
    (0, common_1.Post)('/orders'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_orders_dto_1.GetOrdersDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "requests", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Approve order' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_1.Post)('/approve'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [approve_order_dto_1.ApproveOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "approve", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Accept order' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_1.Post)('/accept'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [accept_order_dto_1.AcceptOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "accept", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Cancel order' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_1.Post)('/cancel'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancel_order_dto_1.CancelOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "cancel", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update order status' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: order_schema_1.Order }),
    (0, common_1.Post)('/status/update'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_status_dto_1.updateOrderStatusDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderStatus", null);
OrderController = __decorate([
    (0, swagger_1.ApiTags)('Order'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map