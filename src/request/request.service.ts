import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApproveRequestsDto } from 'src/dto/request/approve-request.dto';
import { CancelRequestDto } from 'src/dto/request/cancel-request.dto';
import { CreateRequestDto } from 'src/dto/request/create-request.dto';
import { GetRequestsDto } from 'src/dto/request/get-requests.dto';
import { Request } from 'src/schemas/request.schema';

@Injectable()
export class RequestService {
    constructor(
        @InjectModel(Request.name)
        private readonly requestModel: Model<Request>,
    ) { }
    async createRequest(createRequestDto: CreateRequestDto) {
        const request = await this.requestModel.findOne({ requestNumber: createRequestDto.requestNumber });
        if (request) throw new HttpException('Request with this number already exists', HttpStatus.BAD_REQUEST);
        return await this.requestModel.create(createRequestDto);
    }

    async getRequests(getRequestsDto: GetRequestsDto) {
        if (!getRequestsDto.searchText) {
            const requestsNumber = await this.requestModel.find().count();
            if (!requestsNumber) throw new HttpException('Requests not found', HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getRequestsDto.page === 1 ? 0 : (getRequestsDto.page - 1) * getRequestsDto.requestsAtPage;

            const requests = await this.requestModel
                .find({ status: getRequestsDto.statusFilter })
                .skip(numberUnitsToScip)
                .limit(getRequestsDto.requestsAtPage);

            if (!requests.length) throw new HttpException('Requests not found', HttpStatus.BAD_REQUEST);
            return {
                totalPages: Math.ceil(requestsNumber / getRequestsDto.requestsAtPage),
                currentPage: getRequestsDto.page,
                requests: requests
            };
        }

        const requests = await this.requestModel.find(({
            pn: { $regex: getRequestsDto.searchText, $options: 'i' }
        }));

        if (!requests.length) throw new HttpException('Requests not found', HttpStatus.BAD_REQUEST);

        return {
            totalPages: Math.ceil(+requests.length / getRequestsDto.requestsAtPage),
            currentPage: getRequestsDto.page,
            requests: requests
        };

    }

    async approveRequest(approveRequestDto: ApproveRequestsDto) {
        const date = new Date();
        const request = await this.requestModel.findOneAndUpdate(
            { requestNumber: approveRequestDto.requestNumber },
            {
                status: 'approved',
            }
        );
        if (!request) throw new HttpException('Request is not exists', HttpStatus.BAD_REQUEST);

        await request.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'approved',
            remark: '',
            user: approveRequestDto.approvedBy
        })

        await request.save();
        const updatedRequest = await this.requestModel.findOne({ requestNumber: approveRequestDto.requestNumber });
        return updatedRequest;
    }

    async cancelRequest(cancelRequestDto: CancelRequestDto) {
        const date = new Date();
        const req = await this.requestModel.findOneAndUpdate(
            { requestNumber: cancelRequestDto.requestNumber },
            {
                status: 'cancelled'
            }
        );

        if (!req) throw new HttpException('Request is not exists', HttpStatus.BAD_REQUEST);
        await req.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'cancelled',
            remark: '',
            user: cancelRequestDto.canceledBy
        })
        await req.save();

        const updatedRequest = await this.requestModel.findOne({ requestNumber: cancelRequestDto.requestNumber });
        return updatedRequest;
    }

}
