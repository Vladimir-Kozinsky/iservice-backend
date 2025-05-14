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
exports.RequestSchema = exports.Request = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Request = class Request {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'Request Number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Request.prototype, "requestNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Request date' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Request.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A', description: 'Request priority' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Request.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'None', description: 'Request items' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Request.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ovcharenco', description: 'Name who created request' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Request.prototype, "requestedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ovcharenco', description: 'Name who approved request' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Request.prototype, "approvedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Request approve date' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Request.prototype, "approvedDate", void 0);
Request = __decorate([
    (0, mongoose_1.Schema)()
], Request);
exports.Request = Request;
exports.RequestSchema = mongoose_1.SchemaFactory.createForClass(Request);
//# sourceMappingURL=request.schema.js.map