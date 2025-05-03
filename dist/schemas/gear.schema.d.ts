import mongoose, { HydratedDocument, Types } from 'mongoose';
import { GearHistory } from './gearHistory.schema';
import { Leg } from './leg.schema';
import { GearLimit } from './gearLimit.schema';
export type GearDocument = HydratedDocument<Gear>;
export declare class Gear {
    _id: Types.ObjectId;
    pos: string;
    pn: string;
    sn: string;
    initFh: string;
    initFc: string;
    tsn: string;
    csn: string;
    lastInspDate: string;
    tsnAtLastInsp: string;
    csnAtLastInsp: string;
    nextInspDate: string;
    tsnAtNextInsp: string;
    csnAtNextInsp: string;
    gearHistory: [GearHistory];
    legs: Leg[];
    limits: GearLimit[];
}
export declare const GearSchema: mongoose.Schema<Gear, mongoose.Model<Gear, any, any, any, mongoose.Document<unknown, any, Gear> & Omit<Gear & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Gear, mongoose.Document<unknown, {}, mongoose.FlatRecord<Gear>> & Omit<mongoose.FlatRecord<Gear> & Required<{
    _id: Types.ObjectId;
}>, never>>;
