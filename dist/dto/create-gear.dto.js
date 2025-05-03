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
exports.CreateGearDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateGearDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NLG', description: "LG position" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "pos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '65-73762-21', description: "LG part number" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'BN0876', description: "LG serial number" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45231:00', description: "Gear tsn at the time of adding to the system" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "initFh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5231', description: "Gear csn at the time of adding to the system" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "initFc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523:00', description: "LG total FH" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "tsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523', description: "LG total FC" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "csn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-30', description: "Last inspection date" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "lastInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523:00', description: "FH at the time of last Inspection" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "tsnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523', description: "FC at the time of last Inspection" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "csnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2024', description: 'Next inspection date' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "nextInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526:00', description: 'FH at the time of next Inspection' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "tsnAtNextInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526', description: 'FC at the time of next Inspection' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearDto.prototype, "csnAtNextInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "LG removal/instolation action" }),
    __metadata("design:type", Array)
], CreateGearDto.prototype, "gearHistory", void 0);
exports.CreateGearDto = CreateGearDto;
//# sourceMappingURL=create-gear.dto.js.map