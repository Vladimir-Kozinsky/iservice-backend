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
exports.Cfm56LimitSchema = exports.Cfm56Limit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Cfm56Limit = class Cfm56Limit {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '211', description: 'Engine section module' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "section", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25005', description: 'Engine CSN' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "engCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SPOOL-BOOSTER', description: 'Part description' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "part", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '335-009-306-0', description: 'Part number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DA432292', description: 'Serial number' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "initCsnA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "initCsnB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "initCsnC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "initCsn2C", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "csnA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "csnB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "csnC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Cycles life limit' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "csnLimA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Cycles life limit' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "csnLimB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Cycles life limit' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Cfm56Limit.prototype, "csnLimC", void 0);
Cfm56Limit = __decorate([
    (0, mongoose_1.Schema)()
], Cfm56Limit);
exports.Cfm56Limit = Cfm56Limit;
exports.Cfm56LimitSchema = mongoose_1.SchemaFactory.createForClass(Cfm56Limit);
//# sourceMappingURL=cfm56Limit.schema.js.map