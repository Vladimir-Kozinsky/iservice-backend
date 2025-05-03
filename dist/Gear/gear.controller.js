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
exports.GearController = void 0;
const common_1 = require("@nestjs/common");
const gear_service_1 = require("./gear.service");
const swagger_1 = require("@nestjs/swagger");
const gear_schema_1 = require("../schemas/gear.schema");
const create_gear_dto_1 = require("../dto/create-gear.dto");
const create_gearLimit_dto_1 = require("../dto/create-gearLimit.dto");
const gearLimit_schema_1 = require("../schemas/gearLimit.schema");
let GearController = class GearController {
    constructor(gearService) {
        this.gearService = gearService;
    }
    async add(CreateGearDto) {
        return await this.gearService.add(CreateGearDto);
    }
    async getGears() {
        return await this.gearService.getGears();
    }
    async getInstalledGears(getGearDto) {
        return await this.gearService.getGear(getGearDto);
    }
    async addLimit(createGearLimitDto) {
        return await this.gearService.addLimit(createGearLimitDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Gear' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: gear_schema_1.Gear }),
    (0, common_1.Post)('/add'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gear_dto_1.CreateGearDto]),
    __metadata("design:returntype", Promise)
], GearController.prototype, "add", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Gears' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: [gear_schema_1.Gear] }),
    (0, common_1.Get)('/gears'),
    (0, common_1.HttpCode)(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GearController.prototype, "getGears", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get  gear' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: gear_schema_1.Gear }),
    (0, common_1.Get)('/id'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GearController.prototype, "getInstalledGears", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add new Life limit' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: gearLimit_schema_1.GearLimit }),
    (0, common_1.Post)('/limit/add'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gearLimit_dto_1.CreateGearLimitDto]),
    __metadata("design:returntype", Promise)
], GearController.prototype, "addLimit", null);
GearController = __decorate([
    (0, common_1.Controller)('gear'),
    __metadata("design:paramtypes", [gear_service_1.GearService])
], GearController);
exports.GearController = GearController;
//# sourceMappingURL=gear.controller.js.map