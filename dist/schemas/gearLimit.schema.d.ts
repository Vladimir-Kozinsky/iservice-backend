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
import { HydratedDocument, Types } from 'mongoose';
export type LimitDocument = HydratedDocument<GearLimit>;
export declare class GearLimit {
    _id?: Types.ObjectId;
    gearTsn: string;
    gearCsn: string;
    item: string;
    part: string;
    pn: string;
    sn: string;
    instDate: string;
    initTsn: string;
    initCsn: string;
    tsn: string;
    csn: string;
    instCsn: string;
    tsnLim: string;
    csnLim: string;
}
export declare const GearLimitSchema: import("mongoose").Schema<GearLimit, import("mongoose").Model<GearLimit, any, any, any, import("mongoose").Document<unknown, any, GearLimit> & Omit<GearLimit & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, GearLimit, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<GearLimit>> & Omit<import("mongoose").FlatRecord<GearLimit> & Required<{
    _id: Types.ObjectId;
}>, never>>;
