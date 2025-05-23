/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ApproveRequestsDto } from 'src/dto/request/approve-request.dto';
import { CreateRequestDto } from 'src/dto/request/create-request.dto';
import { GetRequestsDto } from 'src/dto/request/get-requests.dto';
import { Request } from 'src/schemas/request.schema';
export declare class RequestService {
    private readonly requestModel;
    constructor(requestModel: Model<Request>);
    createRequest(createRequestDto: CreateRequestDto): Promise<import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    getRequests(getRequestsDto: GetRequestsDto): Promise<{
        totalPages: number;
        currentPage: number;
        requests: (import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
    }>;
    approveRequest(approveRequestDto: ApproveRequestsDto): Promise<import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
