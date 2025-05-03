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
exports.UnitService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const unit_schema_1 = require("../schemas/unit.schema");
let UnitService = class UnitService {
    constructor(unitModel) {
        this.unitModel = unitModel;
    }
    async createUnit(createUnitDto) {
        const unit = await this.unitModel.findOne({ sn: createUnitDto.sn });
        if (unit)
            throw new common_1.HttpException('Unit with this sn already exists', common_1.HttpStatus.BAD_REQUEST);
        return await this.unitModel.create(createUnitDto);
    }
    async editUnit(editUnitDto) {
        const unit = await this.unitModel.findOneAndReplace({ _id: editUnitDto._id }, editUnitDto);
        if (!unit)
            throw new common_1.HttpException('Unit with this sn is not exists', common_1.HttpStatus.BAD_REQUEST);
        const updatedUnit = await this.unitModel.findOne({ _id: editUnitDto._id });
        if (!updatedUnit)
            throw new common_1.HttpException('Unit with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        await console.log(updatedUnit);
        return updatedUnit;
    }
    async deleteUnit(deleteUnitDto) {
        const unit = await this.unitModel.findOneAndDelete({ _id: deleteUnitDto.id });
        console.log(unit);
        if (!unit)
            throw new common_1.HttpException('Unit with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        return unit;
    }
    async getUnits(getUnitsDto) {
        if (!getUnitsDto.searchText) {
            const unitsNumber = await this.unitModel.find().count();
            if (!unitsNumber)
                throw new common_1.HttpException('Units not found', common_1.HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getUnitsDto.page === 1 ? 0 : (getUnitsDto.page - 1) * getUnitsDto.unitsAtPage;
            const units = await this.unitModel
                .find({ location: getUnitsDto.locationFilter })
                .skip(numberUnitsToScip)
                .limit(getUnitsDto.unitsAtPage);
            if (!units.length)
                throw new common_1.HttpException('Units not found', common_1.HttpStatus.BAD_REQUEST);
            return {
                totalPages: Math.ceil(unitsNumber / getUnitsDto.unitsAtPage),
                currentPage: getUnitsDto.page,
                units: units
            };
        }
        const units = await this.unitModel.find(({
            location: getUnitsDto.locationFilter,
            pn: { $regex: getUnitsDto.searchText }
        }));
        if (!units.length)
            throw new common_1.HttpException('Units not found', common_1.HttpStatus.BAD_REQUEST);
        return {
            totalPages: Math.ceil(+units.length / getUnitsDto.unitsAtPage),
            currentPage: getUnitsDto.page,
            units: units
        };
    }
    async getPrintUnits(getPrintUnitsDto) {
        if (!getPrintUnitsDto.searchText) {
            const units = await this.unitModel.find({ location: getPrintUnitsDto.locationFilter });
            if (!units.length)
                throw new common_1.HttpException('Units not found', common_1.HttpStatus.BAD_REQUEST);
            return units;
        }
        const units = await this.unitModel.find(({
            location: getPrintUnitsDto.locationFilter,
            pn: { $regex: getPrintUnitsDto.searchText }
        }));
        if (!units.length)
            throw new common_1.HttpException('Units not found', common_1.HttpStatus.BAD_REQUEST);
        return units;
    }
    async useUnit(useUnitDto) {
        const currentUnit = await this.unitModel.findOne({ _id: useUnitDto._id });
        if (!currentUnit)
            throw new common_1.HttpException('Unit with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        const unit = await this.unitModel.findOneAndUpdate({ _id: useUnitDto._id }, { quantity: currentUnit.quantity - useUnitDto.quantity });
        if (!unit)
            throw new common_1.HttpException('Unit with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        unit.usage.push({
            date: useUnitDto.date,
            aircraft: useUnitDto.aircraft,
            wo: useUnitDto.wo,
            quantity: useUnitDto.quantity,
            remark: useUnitDto.remark
        });
        unit.save();
        const updatedUnit = await this.unitModel.findOne({ _id: useUnitDto._id });
        if (!updatedUnit)
            throw new common_1.HttpException('Unit with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        await console.log(updatedUnit);
        return updatedUnit;
    }
};
UnitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(unit_schema_1.Unit.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=unit.service.js.map