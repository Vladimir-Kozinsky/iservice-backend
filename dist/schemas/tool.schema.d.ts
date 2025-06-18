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
export type ToolDocument = HydratedDocument<Tool>;
export declare class Tool {
    _id: Types.ObjectId;
    pn: string;
    sn: string;
    type: string;
    desc: string;
    quantity: number;
    location: string;
    rack: string;
    shelf: string;
    calibration: string;
    remarks: string;
}
export declare const ToolSchema: import("mongoose").Schema<Tool, import("mongoose").Model<Tool, any, any, any, import("mongoose").Document<unknown, any, Tool> & Omit<Tool & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tool, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Tool>> & Omit<import("mongoose").FlatRecord<Tool> & Required<{
    _id: Types.ObjectId;
}>, never>>;
