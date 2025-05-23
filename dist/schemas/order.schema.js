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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Order = class Order {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NWC523213', description: 'PO Number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "poNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-02-03', description: 'PO create date' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "poDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'Request Number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "requestNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '289134', description: 'Parts' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4654564dh', description: 'Total PO price' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "poPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fly Tech', description: 'Company name and address' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fly Tech', description: 'Company name and address' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "billTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fly Tech', description: 'Company name and address' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "supplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fly Tech', description: 'Company name and address' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Order.prototype, "shipAdress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Approved', description: 'PO status' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Approved', description: 'PO status' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], Order.prototype, "statusHistory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ovcharenco', description: 'Name who approved request' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Order.prototype, "acceptedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Request approve date' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Order.prototype, "acceptedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ovcharenco', description: 'Name who approved request' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Order.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Request approve date' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Order.prototype, "approvedDate", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map