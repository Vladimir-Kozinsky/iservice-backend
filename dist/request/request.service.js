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
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const request_schema_1 = require("../schemas/request.schema");
let RequestService = class RequestService {
    constructor(requestModel) {
        this.requestModel = requestModel;
    }
    async createRequest(createRequestDto) {
        const request = await this.requestModel.findOne({ requestNumber: createRequestDto.requestNumber });
        if (request)
            throw new common_1.HttpException('Request with this number already exists', common_1.HttpStatus.BAD_REQUEST);
        return await this.requestModel.create(createRequestDto);
    }
    async getRequests(getRequestsDto) {
        if (!getRequestsDto.searchText) {
            const requestsNumber = await this.requestModel.find().count();
            if (!requestsNumber)
                throw new common_1.HttpException('Requests not found', common_1.HttpStatus.BAD_REQUEST);
            const numberUnitsToScip = getRequestsDto.page === 1 ? 0 : (getRequestsDto.page - 1) * getRequestsDto.requestsAtPage;
            const requests = await this.requestModel
                .find({ status: getRequestsDto.statusFilter })
                .skip(numberUnitsToScip)
                .limit(getRequestsDto.requestsAtPage);
            if (!requests.length)
                throw new common_1.HttpException('Requests not found', common_1.HttpStatus.BAD_REQUEST);
            return {
                totalPages: Math.ceil(requestsNumber / getRequestsDto.requestsAtPage),
                currentPage: getRequestsDto.page,
                requests: requests
            };
        }
        const requests = await this.requestModel.find(({
            pn: { $regex: getRequestsDto.searchText }
        }));
        if (!requests.length)
            throw new common_1.HttpException('Requests not found', common_1.HttpStatus.BAD_REQUEST);
        return {
            totalPages: Math.ceil(+requests.length / getRequestsDto.requestsAtPage),
            currentPage: getRequestsDto.page,
            requests: requests
        };
    }
    async approveRequest(approveRequestDto) {
        const date = new Date();
        const request = await this.requestModel.findOneAndUpdate({ requestNumber: approveRequestDto.requestNumber }, {
            status: 'approved',
        });
        if (!request)
            throw new common_1.HttpException('Request is not exists', common_1.HttpStatus.BAD_REQUEST);
        await request.statusHistory.push({
            date: date.toISOString().split('T')[0],
            status: 'approved',
            remark: '',
            user: approveRequestDto.approvedBy
        });
        await request.save();
        const updatedRequest = await this.requestModel.findOne({ requestNumber: approveRequestDto.requestNumber });
        return updatedRequest;
    }
};
RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(request_schema_1.Request.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map