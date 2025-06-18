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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { RequestService } from './request.service';
import { Request } from 'src/schemas/request.schema';
import { CreateRequestDto } from 'src/dto/request/create-request.dto';
import { GetRequestsDto } from 'src/dto/request/get-requests.dto';
import { ApproveRequestsDto } from 'src/dto/request/approve-request.dto';
import { CancelRequestDto } from 'src/dto/request/cancel-request.dto';
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    create(createRequestDto: CreateRequestDto): Promise<import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    requests(getRequestsDto: GetRequestsDto): Promise<{
        totalPages: number;
        currentPage: number;
        requests: (import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
    }>;
    approve(approveRequestsDto: ApproveRequestsDto): Promise<import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    cancel(cancelRequestDto: CancelRequestDto): Promise<import("mongoose").Document<unknown, {}, Request> & Omit<Request & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
