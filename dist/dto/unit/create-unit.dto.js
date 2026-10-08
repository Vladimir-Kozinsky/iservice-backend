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
exports.CreateUnitDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUnitDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25', description: 'ATA Chapter' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "ata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'Part Number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '289134', description: 'Serial Number' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Consumables', description: 'Parts type' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CSD', description: 'Part description' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NWC23423432', description: 'Part GRN number' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "grn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'Parts quantity' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EA', description: 'EA or Pack' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "eapack", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sharjah', description: 'Parts location' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Rack location' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "rack", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'Shelf location' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "shelf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NEW', description: 'Parts condition' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Life limit' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "lifelimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.06.2029', description: 'Shelf life' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "shelflife", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Remarks', description: 'Remarks' }),
    __metadata("design:type", String)
], CreateUnitDto.prototype, "remarks", void 0);
exports.CreateUnitDto = CreateUnitDto;
//# sourceMappingURL=create-unit.dto.js.map