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
exports.UnitSchema = exports.Unit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Unit = class Unit {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25', description: 'ATA Chapter' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "ata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'Part Number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'Part Number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "altPn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '289134', description: 'Serial Number' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Consumables', description: 'Parts type' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CSD', description: 'Part description' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NWY23423432', description: 'Part GRN number' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "grn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'Parts quantity' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Unit.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EA', description: 'EA or Pack' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "eapack", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sharjah', description: 'Parts location' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Rack location' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "rack", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'Shelf location' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "shelf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NEW', description: 'Parts condition' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unit.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Life limit' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "lifelimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Shelf life' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "shelflife", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Remarks', description: 'Remarks' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Unit.prototype, "remarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Remarks', description: 'Remarks' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], Unit.prototype, "usage", void 0);
Unit = __decorate([
    (0, mongoose_1.Schema)()
], Unit);
exports.Unit = Unit;
exports.UnitSchema = mongoose_1.SchemaFactory.createForClass(Unit);
//# sourceMappingURL=unit.schema.js.map