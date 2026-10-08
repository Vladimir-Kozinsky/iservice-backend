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
exports.CreateToolDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateToolDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'Part Number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "pn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '289134', description: 'Serial Number' }),
    __metadata("design:type", String)
], CreateToolDto.prototype, "sn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Consumables', description: 'Parts type' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CSD', description: 'Part description' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10', description: 'Parts quantity' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sharjah', description: 'Parts location' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateToolDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Rack location' }),
    __metadata("design:type", String)
], CreateToolDto.prototype, "rack", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'Shelf location' }),
    __metadata("design:type", String)
], CreateToolDto.prototype, "shelf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25.05.2025', description: 'Due calibration date' }),
    __metadata("design:type", String)
], CreateToolDto.prototype, "calibration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Remarks', description: 'Remarks' }),
    __metadata("design:type", String)
], CreateToolDto.prototype, "remarks", void 0);
exports.CreateToolDto = CreateToolDto;
//# sourceMappingURL=create-tool.dto.js.map