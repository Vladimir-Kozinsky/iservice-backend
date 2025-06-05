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
exports.ToolService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tool_schema_1 = require("../schemas/tool.schema");
let ToolService = class ToolService {
    constructor(toolModel) {
        this.toolModel = toolModel;
    }
    async createTool(createUnitDto) {
        const unit = await this.toolModel.findOne({ sn: createUnitDto.sn });
        if (unit && createUnitDto.sn)
            throw new common_1.HttpException('Tool with this sn already exists', common_1.HttpStatus.BAD_REQUEST);
        return await this.toolModel.create(createUnitDto);
    }
    async editTool(editUnitDto) {
        const unit = await this.toolModel.findOneAndReplace({ _id: editUnitDto._id }, editUnitDto);
        if (!unit)
            throw new common_1.HttpException('Tool with this sn is not exists', common_1.HttpStatus.BAD_REQUEST);
        const updatedUnit = await this.toolModel.findOne({ _id: editUnitDto._id });
        if (!updatedUnit)
            throw new common_1.HttpException('Tool with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        return updatedUnit;
    }
    async deleteTool(deleteUnitDto) {
        const unit = await this.toolModel.findOneAndDelete({ _id: deleteUnitDto.id });
        if (!unit)
            throw new common_1.HttpException('Tool with this id is not exists', common_1.HttpStatus.BAD_REQUEST);
        return unit;
    }
    async getTools(getUnitsDto) {
        if (!getUnitsDto.searchText) {
            const unitsNumber = await this.toolModel.find({ location: getUnitsDto.locationFilter }).count();
            if (!unitsNumber)
                throw new common_1.HttpException('Tools not found', common_1.HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getUnitsDto.page === 1 ? 0 : (getUnitsDto.page - 1) * getUnitsDto.toolsAtPage;
            const units = await this.toolModel
                .find({ location: getUnitsDto.locationFilter })
                .skip(numberUnitsToScip)
                .limit(getUnitsDto.toolsAtPage);
            if (!units.length)
                throw new common_1.HttpException('Tools not found', common_1.HttpStatus.BAD_REQUEST);
            return {
                totalPages: Math.ceil(unitsNumber / getUnitsDto.toolsAtPage),
                currentPage: getUnitsDto.page,
                tools: units
            };
        }
        const units = await this.toolModel.find(({
            location: getUnitsDto.locationFilter,
            $or: [
                { pn: { $regex: getUnitsDto.searchText, $options: 'i' } },
                { desc: { $regex: getUnitsDto.searchText, $options: 'i' } }
            ]
        }));
        if (!units.length)
            throw new common_1.HttpException('Tools not found', common_1.HttpStatus.BAD_REQUEST);
        return {
            totalPages: Math.ceil(+units.length / getUnitsDto.toolsAtPage),
            currentPage: getUnitsDto.page,
            tools: units
        };
    }
    async getPrintTools(getPrintUnitsDto) {
        if (!getPrintUnitsDto.searchText) {
            const units = await this.toolModel.find({ location: getPrintUnitsDto.locationFilter });
            if (!units.length)
                throw new common_1.HttpException('Tools not found', common_1.HttpStatus.BAD_REQUEST);
            return units;
        }
        const units = await this.toolModel.find(({
            location: getPrintUnitsDto.locationFilter,
            $or: [
                { pn: { $regex: getPrintUnitsDto.searchText, $options: 'i' } },
                { desc: { $regex: getPrintUnitsDto.searchText, $options: 'i' } }
            ]
        }));
        if (!units.length)
            throw new common_1.HttpException('Tools not found', common_1.HttpStatus.BAD_REQUEST);
        return units;
    }
};
ToolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tool_schema_1.Tool.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ToolService);
exports.ToolService = ToolService;
//# sourceMappingURL=tool.service.js.map