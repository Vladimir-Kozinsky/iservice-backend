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
exports.AcceptOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AcceptOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2589134', description: 'PO Number' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AcceptOrderDto.prototype, "poNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ovcharenco', description: 'Name who approved request' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AcceptOrderDto.prototype, "acceptedBy", void 0);
exports.AcceptOrderDto = AcceptOrderDto;
//# sourceMappingURL=accept-order.dto.js.map