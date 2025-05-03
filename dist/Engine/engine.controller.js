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
exports.EngineController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const engine_service_1 = require("./engine.service");
const create_engine_dto_1 = require("../dto/create-engine.dto");
const engine_schema_1 = require("../schemas/engine.schema");
const create_engineLimit_dto_1 = require("../dto/create-engineLimit.dto");
const cfm56Limit_schema_1 = require("../schemas/cfm56Limit.schema");
const delete_engineLLP_dto_1 = require("../dto/engine/delete-engineLLP.dto");
let EngineController = class EngineController {
    constructor(engineService) {
        this.engineService = engineService;
    }
    async add(createUserDto) {
        return await this.engineService.add(createUserDto);
    }
    async getEngines() {
        return await this.engineService.getEngines();
    }
    async getInstalledEngines(getEngineDto) {
        return await this.engineService.getEngine(getEngineDto);
    }
    async getEngine(getEngineByMsnDto) {
        return await this.engineService.getEngineByMsn(getEngineByMsnDto);
    }
    async addLimit(createEngineLimitDto) {
        return await this.engineService.addLimit(createEngineLimitDto);
    }
    async delLimit(deleteLimitDto) {
        return await this.engineService.delLimit(deleteLimitDto);
    }
    async reculcEngineLLP(updateLimitsDto) {
        return await this.engineService.updateEngineLLP(updateLimitsDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add engine' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_engine_dto_1.CreateEngineDto }),
    (0, common_1.Post)('/add'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_engine_dto_1.CreateEngineDto]),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "add", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get engines' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: [create_engine_dto_1.CreateEngineDto] }),
    (0, common_1.Get)('/engines'),
    (0, common_1.HttpCode)(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "getEngines", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get  engine' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: engine_schema_1.Engine }),
    (0, common_1.Get)('/id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "getInstalledEngines", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get  engine' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: engine_schema_1.Engine }),
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "getEngine", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add new Life limit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: cfm56Limit_schema_1.Cfm56Limit }),
    (0, common_1.Post)('/limit/add'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_engineLimit_dto_1.CreateCfm56LimitDto]),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "addLimit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete limit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: String }),
    (0, common_1.Post)('/limit/delete'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_engineLLP_dto_1.DeleteEngineLLPDto]),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "delLimit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Engine LLP' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: [engine_schema_1.Engine] }),
    (0, common_1.Post)('/limits/update'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EngineController.prototype, "reculcEngineLLP", null);
EngineController = __decorate([
    (0, swagger_1.ApiTags)('Engine'),
    (0, common_1.Controller)('engine'),
    __metadata("design:paramtypes", [engine_service_1.EngineService])
], EngineController);
exports.EngineController = EngineController;
//# sourceMappingURL=engine.controller.js.map