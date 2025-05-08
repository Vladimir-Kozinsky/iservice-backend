import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ToolService } from './tool.service';
import { Tool } from 'src/schemas/tool.schema';
import { CreateToolDto } from 'src/dto/tool/create-tool.dto';
import { ChangeToolDto } from 'src/dto/tool/change-tool.dto';
import { GetToolsDto } from 'src/dto/tool/get-tools.dto';
import { GetPrintToolsDto } from 'src/dto/tool/print-tools.dto';

@ApiTags('Tool')
@Controller('tool')
export class ToolController {
    constructor(private readonly toolService: ToolService) { }

    @ApiOperation({ summary: 'Add tool' })
    @ApiResponse({ status: 201, type: Tool })
    @Post('/create')
    @HttpCode(201)
    async create(@Body() createUnitDto: CreateToolDto) {
        return await this.toolService.createTool(createUnitDto)
    }

    @ApiOperation({ summary: 'Edit tool' })
    @ApiResponse({ status: 201, type: Tool })
    @Post('/edit')
    @HttpCode(201)
    async edit(@Body() editUnitDto: ChangeToolDto) {
        return await this.toolService.editTool(editUnitDto)
    }

    @ApiOperation({ summary: 'Delete tool' })
    @ApiResponse({ status: 201, type: Tool })
    @Post('/delete')
    @HttpCode(201)
    async delete(@Body() deleteUnitDto: { id: string }) {
        return await this.toolService.deleteTool(deleteUnitDto)
    }

    @ApiOperation({ summary: 'Get tools' })
    @ApiResponse({ status: 201, type: Tool })
    @Post('/tools')
    @HttpCode(201)
    async units(@Body() getUnitsDto: GetToolsDto) {
        return await this.toolService.getTools(getUnitsDto)
    }

    @ApiOperation({ summary: 'Get print tools' })
    @ApiResponse({ status: 201, type: Tool })
    @Post('/print')
    @HttpCode(201)
    async print(@Body() getPrintUnitsDto: GetPrintToolsDto) {
        return await this.toolService.getPrintTools(getPrintUnitsDto);
    }

}
