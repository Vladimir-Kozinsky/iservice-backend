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
export type LimitDocument = HydratedDocument<Cfm56Limit>;
export declare class Cfm56Limit {
    _id?: Types.ObjectId;
    section: string;
    engCsn: string;
    part: string;
    pn: string;
    sn: string;
    initCsnA: string;
    initCsnB: string;
    initCsnC: string;
    initCsn2C: string;
    csnA: string;
    csnB: string;
    csnC: string;
    csnLimA: string;
    csnLimB: string;
    csnLimC: string;
}
export declare const Cfm56LimitSchema: import("mongoose").Schema<Cfm56Limit, import("mongoose").Model<Cfm56Limit, any, any, any, import("mongoose").Document<unknown, any, Cfm56Limit> & Omit<Cfm56Limit & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cfm56Limit, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Cfm56Limit>> & Omit<import("mongoose").FlatRecord<Cfm56Limit> & Required<{
    _id: Types.ObjectId;
}>, never>>;
