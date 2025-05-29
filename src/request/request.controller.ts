import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestService } from './request.service';
import { CreateUnitDto } from 'src/dto/unit/create-unit.dto';
import { Request } from 'src/schemas/request.schema';
import { CreateRequestDto } from 'src/dto/request/create-request.dto';
import { GetRequestsDto } from 'src/dto/request/get-requests.dto';
import { ApproveRequestsDto } from 'src/dto/request/approve-request.dto';
import { CancelRequestDto } from 'src/dto/request/cancel-request.dto';

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

    @ApiOperation({ summary: 'Get requests' })
    @ApiResponse({ status: 201, type: Request })
    @Post('/requests')
    @HttpCode(201)
    async requests(@Body() getRequestsDto: GetRequestsDto) {
        return await this.requestService.getRequests(getRequestsDto)
    }

    @ApiOperation({ summary: 'Approved request' })
    @ApiResponse({ status: 201, type: Request })
    @Post('/approve')
    @HttpCode(201)
    async approve(@Body() approveRequestsDto: ApproveRequestsDto) {
        return await this.requestService.approveRequest(approveRequestsDto)
    }

    @ApiOperation({ summary: 'Cancel request' })
    @ApiResponse({ status: 201, type: Request })
    @Post('/cancel')
    @HttpCode(201)
    async cancel(@Body() cancelRequestDto: CancelRequestDto) {
        return await this.requestService.cancelRequest(cancelRequestDto);
    }
}
