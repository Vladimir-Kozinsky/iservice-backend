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
exports.CreateGearLimitDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateGearLimitDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25891', description: 'MSN' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "gearSn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25005:00', description: 'Gear TSN' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "gearTsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25005', description: 'Gear CSN' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "gearCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Gear section module' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SPOOL-BOOSTER', description: 'Part description' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "part", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '335-009-306-0', description: 'Part number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DA432292', description: 'Serial number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1989-01-30', description: 'Part instalation date' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "instDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050:00', description: 'initial TSN' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "initTsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'initial CSN' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "initCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050:00', description: 'Part Times Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "tsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "csn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles at instalation' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "instCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050:00', description: 'Part Life Limit Times' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "tsnLim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Life Limit Cycles' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateGearLimitDto.prototype, "csnLim", void 0);
exports.CreateGearLimitDto = CreateGearLimitDto;
//# sourceMappingURL=create-gearLimit.dto.js.map