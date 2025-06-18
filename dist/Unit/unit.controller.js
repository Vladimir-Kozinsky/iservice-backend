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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const unit_service_1 = require("./unit.service");
const unit_schema_1 = require("../schemas/unit.schema");
const create_unit_dto_1 = require("../dto/unit/create-unit.dto");
const get_units_dto_1 = require("../dto/unit/get-units.dto");
const change_unit_dto_1 = require("../dto/unit/change-unit.dto");
const use_unit_dto_1 = require("../dto/unit/use-unit.dto");
const print_units_dto_1 = require("../dto/unit/print-units.dto");
let UnitController = class UnitController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async create(createUnitDto) {
        return await this.unitService.createUnit(createUnitDto);
    }
    async test() {
        return await this.unitService.test();
    }
    async edit(editUnitDto) {
        return await this.unitService.editUnit(editUnitDto);
    }
    async delete(deleteUnitDto) {
        return await this.unitService.deleteUnit(deleteUnitDto);
    }
    async units(getUnitsDto) {
        return await this.unitService.getUnits(getUnitsDto);
    }
    async print(getPrintUnitsDto) {
        return await this.unitService.getPrintUnits(getPrintUnitsDto);
    }
    async use(useUnitDto) {
        return await this.unitService.useUnit(useUnitDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add unit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Post)('/create'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unit_dto_1.CreateUnitDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add unit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Get)('/test'),
    (0, common_1.HttpCode)(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "test", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit unit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Post)('/edit'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_unit_dto_1.ChangeUnitDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete unit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Post)('/delete'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get units' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Post)('/units'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_units_dto_1.GetUnitsDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "units", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get print units' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Post)('/print'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [print_units_dto_1.GetPrintUnitsDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "print", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Use unit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: unit_schema_1.Unit }),
    (0, common_1.Post)('/use'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [use_unit_dto_1.UseUnitDto]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "use", null);
UnitController = __decorate([
    (0, swagger_1.ApiTags)('Unit'),
    (0, common_1.Controller)('unit'),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitController);
exports.UnitController = UnitController;
//# sourceMappingURL=unit.controller.js.map