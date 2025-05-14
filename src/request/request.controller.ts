import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestService } from './request.service';
import { CreateUnitDto } from 'src/dto/unit/create-unit.dto';
import { Request } from 'src/schemas/request.schema';
import { CreateRequestDto } from 'src/dto/request/create-request.dto';

@ApiTags('Controller')
@Controller('request')
export class RequestController {
    constructor(private readonly requestService: RequestService) { }

    @ApiOperation({ summary: 'Create request' })
    @ApiResponse({ status: 201, type: Request })
    @Post('/create')
    @HttpCode(201)
    async create(@Body() createRequestDto: CreateRequestDto) {
        return await this.requestService.createRequest(createRequestDto)
    }
}
