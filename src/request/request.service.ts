import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from 'src/dto/request/create-request.dto';
import { Request } from 'src/schemas/request.schema';

@Injectable()
export class RequestService {
    constructor(
            @InjectModel(Request.name)
            private readonly requestModel: Model<Request>,
        ) { }
        async createRequest(createRequestDto: CreateRequestDto) {
                const request = await this.requestModel.findOne({ requestNumber: createRequestDto.requestNumber});
                if (request) throw new HttpException('Request with this number already exists', HttpStatus.BAD_REQUEST);
                return await this.requestModel.create(createRequestDto);
            }
}
