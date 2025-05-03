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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEngineDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const engineHistory_schema_1 = require("src/schemas/engineHistory.schema");
class CreateEngineDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CFM56-3C1', description: "Engine type" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20000', description: "Engine Thrust Rating" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "thrust", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '25891', description: "Engine manufacturer's Serial Number" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "msn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1989-01-30', description: "Engine manufacturere date" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "manufDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CFM', description: "Engine manufacturer" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "manuf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45231:00', description: "Engine tsn at the time of adding to the system" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "initFh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5231', description: "Engine csn at the time of adding to the system" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "initFc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45697:00', description: "Engine Time Since New" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "tsn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45697:00', description: "Engine Cycles Since New" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "csn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "Engine removal/instolation action" }),
    __metadata("design:type", typeof (_a = typeof engineHistory_schema_1.EngineHistory !== "undefined" && engineHistory_schema_1.EngineHistory) === "function" ? _a : Object)
], CreateEngineDto.prototype, "engineHistory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-30', description: "Last overhaul date" }),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "lastOverhaulDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '45231:00', description: "FH at the time of last overhaul" }),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "tsnAtLastOverhaul", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4523', description: "FC at the time of last overhaul" }),
    __metadata("design:type", String)
], CreateEngineDto.prototype, "csnAtLastOverhaul", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "Limit" }),
    __metadata("design:type", Array)
], CreateEngineDto.prototype, "limits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'none', description: "Legs" }),
    __metadata("design:type", Array)
], CreateEngineDto.prototype, "legs", void 0);
exports.CreateEngineDto = CreateEngineDto;
//# sourceMappingURL=create-engine.dto.js.map