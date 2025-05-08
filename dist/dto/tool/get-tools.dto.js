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
exports.GetToolsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GetToolsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2', description: 'Page number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetToolsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25', description: 'Tools at page' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetToolsDto.prototype, "toolsAtPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Manas', description: 'Location' }),
    __metadata("design:type", Array)
], GetToolsDto.prototype, "locationFilter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'up', description: 'Filter direction up or down' }),
    __metadata("design:type", String)
], GetToolsDto.prototype, "filterDirection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'wheel', description: 'Search text' }),
    __metadata("design:type", String)
], GetToolsDto.prototype, "searchText", void 0);
exports.GetToolsDto = GetToolsDto;
//# sourceMappingURL=get-tools.dto.js.map