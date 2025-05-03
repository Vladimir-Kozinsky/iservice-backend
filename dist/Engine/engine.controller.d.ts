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
import { EngineService } from './engine.service';
import { CreateEngineDto } from 'src/dto/create-engine.dto';
import { Types } from 'mongoose';
import { Engine } from 'src/schemas/engine.schema';
import { CreateCfm56LimitDto } from 'src/dto/create-engineLimit.dto';
import { Cfm56Limit } from 'src/schemas/cfm56Limit.schema';
import { DeleteEngineLLPDto } from 'src/dto/engine/delete-engineLLP.dto';
export declare class EngineController {
    private readonly engineService;
    constructor(engineService: EngineService);
    add(createUserDto: CreateEngineDto): Promise<import("mongoose").Document<unknown, {}, Engine> & Omit<Engine & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    getEngines(): Promise<(import("mongoose").Document<unknown, {}, Engine> & Omit<Engine & Required<{
        _id: Types.ObjectId;
    }>, never>)[]>;
    getInstalledEngines(getEngineDto: {
        id: Types.ObjectId;
    }): Promise<import("mongoose").Document<unknown, {}, Engine> & Omit<Engine & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    getEngine(getEngineByMsnDto: {
        msn: string;
    }): Promise<import("mongoose").Document<unknown, {}, Engine> & Omit<Engine & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    addLimit(createEngineLimitDto: CreateCfm56LimitDto): Promise<import("mongoose").Document<unknown, {}, Cfm56Limit> & Omit<Cfm56Limit & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    delLimit(deleteLimitDto: DeleteEngineLLPDto): Promise<string>;
    reculcEngineLLP(updateLimitsDto: {
        esn: string;
    }): Promise<(import("mongoose").Document<unknown, {}, Engine> & Omit<Engine & Required<{
        _id: Types.ObjectId;
    }>, never>)[]>;
}
