import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChangeToolDto } from 'src/dto/tool/change-tool.dto';
import { CreateToolDto } from 'src/dto/tool/create-tool.dto';
import { GetToolsDto } from 'src/dto/tool/get-tools.dto';
import { GetPrintToolsDto } from 'src/dto/tool/print-tools.dto';
import { Tool } from 'src/schemas/tool.schema';

@Injectable()
export class ToolService {
    constructor(
        @InjectModel(Tool.name)
        private readonly toolModel: Model<Tool>,

    ) { }
    async createTool(createUnitDto: CreateToolDto) {
        const unit = await this.toolModel.findOne({ sn: createUnitDto.sn });
        if (unit && createUnitDto.sn) throw new HttpException('Tool with this sn already exists', HttpStatus.BAD_REQUEST);
        return await this.toolModel.create(createUnitDto);
    }

    async editTool(editUnitDto: ChangeToolDto) {
        const unit = await this.toolModel.findOneAndReplace({ _id: editUnitDto._id }, editUnitDto);
        if (!unit) throw new HttpException('Tool with this sn is not exists', HttpStatus.BAD_REQUEST);

        const updatedUnit = await this.toolModel.findOne({ _id: editUnitDto._id });
        if (!updatedUnit) throw new HttpException('Tool with this id is not exists', HttpStatus.BAD_REQUEST);
        return updatedUnit;
    }

    async deleteTool(deleteUnitDto: { id: string }) {
        const unit = await this.toolModel.findOneAndDelete({ _id: deleteUnitDto.id });
        if (!unit) throw new HttpException('Tool with this id is not exists', HttpStatus.BAD_REQUEST);
        return unit;
    }

    async getTools(getUnitsDto: GetToolsDto) {
        if (!getUnitsDto.searchText) {
            const unitsNumber = await this.toolModel.find({ location: getUnitsDto.locationFilter }).count();
            if (!unitsNumber) throw new HttpException('Tools not found', HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getUnitsDto.page === 1 ? 0 : (getUnitsDto.page - 1) * getUnitsDto.toolsAtPage;

            const units = await this.toolModel
                .find({ location: getUnitsDto.locationFilter })
                .skip(numberUnitsToScip)
                .limit(getUnitsDto.toolsAtPage);

            if (!units.length) throw new HttpException('Tools not found', HttpStatus.BAD_REQUEST);
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

        if (!units.length) throw new HttpException('Tools not found', HttpStatus.BAD_REQUEST);

        return {
            totalPages: Math.ceil(+units.length / getUnitsDto.toolsAtPage),
            currentPage: getUnitsDto.page,
            tools: units
        };

    }


    async getPrintTools(getPrintUnitsDto: GetPrintToolsDto) {

        if (!getPrintUnitsDto.searchText) {
            const units = await this.toolModel.find({ location: getPrintUnitsDto.locationFilter })
            if (!units.length) throw new HttpException('Tools not found', HttpStatus.BAD_REQUEST);
            return units;
        }

        const units = await this.toolModel.find(({
            location: getPrintUnitsDto.locationFilter,
            $or: [
                { pn: { $regex: getPrintUnitsDto.searchText, $options: 'i' } },
                { desc: { $regex: getPrintUnitsDto.searchText, $options: 'i' } }
            ]
        }));

        if (!units.length) throw new HttpException('Tools not found', HttpStatus.BAD_REQUEST);

        return units;
    }

}
