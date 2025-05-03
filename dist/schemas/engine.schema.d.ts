import mongoose, { HydratedDocument, Types } from 'mongoose';
import { EngineHistory } from './engineHistory.schema';
import { Leg } from './leg.schema';
import { Cfm56Limit } from './cfm56Limit.schema';
export type EngineDocument = HydratedDocument<Engine>;
export declare class Engine {
    _id: Types.ObjectId;
    type: string;
    thrust: string;
    msn: string;
    manufDate: string;
    manuf: string;
    position: number;
    initFh: string;
    initFc: string;
    tsn: string;
    csn: string;
    engineHistory: [EngineHistory];
    lastOverhaulDate: string;
    tsnAtLastOverhaul: string;
    csnAtLastOverhaul: string;
    limits: [Cfm56Limit];
    legs: Leg[];
}
export declare const EngineSchema: mongoose.Schema<Engine, mongoose.Model<Engine, any, any, any, mongoose.Document<unknown, any, Engine> & Omit<Engine & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Engine, mongoose.Document<unknown, {}, mongoose.FlatRecord<Engine>> & Omit<mongoose.FlatRecord<Engine> & Required<{
    _id: Types.ObjectId;
}>, never>>;
