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
exports.CreateCfm56LimitDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCfm56LimitDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '859633', description: 'Engine Serial Number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "esn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25200', description: 'Engine CSN at adding limit' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "engCsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '211', description: 'Engine section module' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "section", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SPOOL-BOOSTER', description: 'Part description' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "part", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '335-009-306-0', description: 'Part number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'DA432292', description: 'Serial number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "initCsnA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "initCsnB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "initCsnC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "csnA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "csnB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Part Cycles Since New' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "csnC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Cycles life limit' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "csnLimA", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Cycles life limit' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "csnLimB", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25050', description: 'Cycles life limit' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCfm56LimitDto.prototype, "csnLimC", void 0);
exports.CreateCfm56LimitDto = CreateCfm56LimitDto;
//# sourceMappingURL=create-engineLimit.dto.js.map