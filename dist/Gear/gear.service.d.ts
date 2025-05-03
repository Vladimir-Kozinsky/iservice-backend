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
import { Model, Types } from 'mongoose';
import { CreateGearDto } from 'src/dto/create-gear.dto';
import { CreateGearLimitDto } from 'src/dto/create-gearLimit.dto';
import { Gear } from 'src/schemas/gear.schema';
import { GearLimit } from 'src/schemas/gearLimit.schema';
export declare class GearService {
    private readonly gearModel;
    private readonly gearLimitModel;
    constructor(gearModel: Model<Gear>, gearLimitModel: Model<GearLimit>);
    add(createGearDto: CreateGearDto): Promise<import("mongoose").Document<unknown, {}, Gear> & Omit<Gear & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    getGears(): Promise<(import("mongoose").Document<unknown, {}, Gear> & Omit<Gear & Required<{
        _id: Types.ObjectId;
    }>, never>)[]>;
    getGear(getGearDto: {
        id: Types.ObjectId;
    }): Promise<import("mongoose").Document<unknown, {}, Gear> & Omit<Gear & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    addLimit(createGearLimitDto: CreateGearLimitDto): Promise<import("mongoose").Document<unknown, {}, GearLimit> & Omit<GearLimit & Required<{
        _id: Types.ObjectId;
    }>, never>>;
}
