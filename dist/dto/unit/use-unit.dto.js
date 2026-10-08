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
exports.UseUnitDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_1 = require("mongoose");
class UseUnitDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UseUnitDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'Parts quantity' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UseUnitDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EA7689', description: 'Work order Number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UseUnitDto.prototype, "wo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Usage date' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UseUnitDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EX-37017', description: 'Aircraft' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UseUnitDto.prototype, "aircraft", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Remark', description: 'Remark' }),
    __metadata("design:type", String)
], UseUnitDto.prototype, "remark", void 0);
exports.UseUnitDto = UseUnitDto;
//# sourceMappingURL=use-unit.dto.js.map