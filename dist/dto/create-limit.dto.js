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
exports.CreateLimitDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateLimitDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25891', description: 'MSN' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "msn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Life limit', description: 'Limit title' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2024', description: 'Inspection date' }),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "lastInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526:00', description: 'FH at the time of last Inspection' }),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "tsnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526', description: 'FC at the time of last Inspection' }),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "csnAtLastInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2024', description: 'Next inspection date' }),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "nextInspDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526:00', description: 'FH at the time of last Inspection' }),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "tsnAtNextInsp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10526', description: 'FC at the time of last Inspection' }),
    __metadata("design:type", String)
], CreateLimitDto.prototype, "csnAtNextInsp", void 0);
exports.CreateLimitDto = CreateLimitDto;
//# sourceMappingURL=create-limit.dto.js.map