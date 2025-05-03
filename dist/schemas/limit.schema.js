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
exports.LimitSchema = exports.Limit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Limit = class Limit {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'C-check', description: 'Inspection type' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Limit.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2024', description: 'Inspection date' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Limit.prototype, "lastInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526:00', description: 'FH at the time of last Inspection' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Limit.prototype, "tsnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526', description: 'FC at the time of last Inspection' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Limit.prototype, "csnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2024', description: 'Inspection date' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Limit.prototype, "nextInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526:00', description: 'FH at the time of last Inspection' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Limit.prototype, "tsnAtNextInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526', description: 'FC at the time of last Inspection' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Limit.prototype, "csnAtNextInsp", void 0);
Limit = __decorate([
    (0, mongoose_1.Schema)()
], Limit);
exports.Limit = Limit;
exports.LimitSchema = mongoose_1.SchemaFactory.createForClass(Limit);
//# sourceMappingURL=limit.schema.js.map