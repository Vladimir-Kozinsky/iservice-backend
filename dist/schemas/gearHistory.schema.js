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
exports.GearHistorySchema = exports.GearHistory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let GearHistory = class GearHistory {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-30', description: 'Action date' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'removal', description: 'Action' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25891', description: 'Aircraft MSN' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "aircraft", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '29891', description: 'Gear SN' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "gear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NLG', description: 'Gear position' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2891:00', description: 'Aircraft Time Since New' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "aircraftTsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2891:00', description: 'Aircraft Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "aircraftCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5891:00', description: 'Engine Time Since New' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "gearTsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5891:00', description: 'Engine Cycles Since New' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], GearHistory.prototype, "gearCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Overhaul', description: 'Engine removal reason' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], GearHistory.prototype, "reason", void 0);
GearHistory = __decorate([
    (0, mongoose_1.Schema)()
], GearHistory);
exports.GearHistory = GearHistory;
exports.GearHistorySchema = mongoose_1.SchemaFactory.createForClass(GearHistory);
//# sourceMappingURL=gearHistory.schema.js.map