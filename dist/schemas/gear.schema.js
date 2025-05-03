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
exports.GearSchema = exports.Gear = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Gear = class Gear {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NLG', description: "LG position" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "pos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '65-73762-21', description: "LG part number" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'BN0876', description: "LG serial number" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45231:00', description: "Engine tsn at the time of adding to the system" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "initFh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5231', description: "Engine csn at the time of adding to the system" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "initFc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523:00', description: "LG total FH" }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Gear.prototype, "tsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523', description: "LG total FC" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "csn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-30', description: "Last inspection date" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "lastInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523:00', description: "FH at the time of last Inspection" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "tsnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523', description: "FC at the time of last Inspection" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Gear.prototype, "csnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2024', description: 'Next inspection date' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Gear.prototype, "nextInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526:00', description: 'FH at the time of last Inspection' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Gear.prototype, "tsnAtNextInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526', description: 'FC at the time of last Inspection' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Gear.prototype, "csnAtNextInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "LG removal/instolation action" }),
    (0, mongoose_1.Prop)({ ref: 'GearHistory' }),
    __metadata("design:type", Array)
], Gear.prototype, "gearHistory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "Legs" }),
    (0, mongoose_1.Prop)({ ref: 'Leg' }),
    __metadata("design:type", Array)
], Gear.prototype, "legs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "Limits" }),
    (0, mongoose_1.Prop)({ ref: 'GearLimit' }),
    __metadata("design:type", Array)
], Gear.prototype, "limits", void 0);
Gear = __decorate([
    (0, mongoose_1.Schema)()
], Gear);
exports.Gear = Gear;
exports.GearSchema = mongoose_1.SchemaFactory.createForClass(Gear);
//# sourceMappingURL=gear.schema.js.map