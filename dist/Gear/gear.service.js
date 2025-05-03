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
exports.GearService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const gear_schema_1 = require("../schemas/gear.schema");
const gearLimit_schema_1 = require("../schemas/gearLimit.schema");
let GearService = class GearService {
    constructor(gearModel, gearLimitModel) {
        this.gearModel = gearModel;
        this.gearLimitModel = gearLimitModel;
    }
    async add(createGearDto) {
        const gear = await this.gearModel.findOne({ sn: createGearDto.sn });
        if (gear)
            throw new common_1.HttpException('Gear with this sn already exists', common_1.HttpStatus.BAD_REQUEST);
        return await this.gearModel.create(createGearDto);
    }
    async getGears() {
        const gears = await this.gearModel.find();
        if (!gears.length)
            throw new common_1.HttpException('Gears not found', common_1.HttpStatus.BAD_REQUEST);
        return gears;
    }
    async getGear(getGearDto) {
        console.log(getGearDto);
        const gear = await this.gearModel.findById(getGearDto.id);
        if (!gear)
            throw new common_1.HttpException('Gear not found', common_1.HttpStatus.BAD_REQUEST);
        return gear;
    }
    async addLimit(createGearLimitDto) {
        const limit = await this.gearLimitModel.create(createGearLimitDto);
        const gear = await this.gearModel.findOne({ sn: createGearLimitDto.gearSn });
        if (!gear)
            throw new common_1.HttpException('Gear not found', common_1.HttpStatus.BAD_REQUEST);
        gear.limits.push(limit);
        await gear.save();
        await this.gearLimitModel.findByIdAndRemove(limit._id);
        return limit;
    }
};
GearService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gear_schema_1.Gear.name)),
    __param(1, (0, mongoose_1.InjectModel)(gearLimit_schema_1.GearLimit.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], GearService);
exports.GearService = GearService;
//# sourceMappingURL=gear.service.js.map