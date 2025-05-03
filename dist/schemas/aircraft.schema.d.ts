import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Limit } from './limit.schema';
import { Leg } from './leg.schema';
import { Engine } from './engine.schema';
import { Apu } from './apu.schema';
import { Gear } from './gear.schema';
export type AircraftDocument = HydratedDocument<Aircraft>;
export declare class Aircraft {
    _id: Types.ObjectId;
    regNum: string;
    type: string;
    typeCert: string;
    manufDate: string;
    msn: string;
    code: string;
    mtow: number;
    mzfw: number;
    mlw: number;
    mtw: number;
    fuelCap: number;
    bew: number;
    cg: number;
    initFh: string;
    initFc: string;
    fh: string;
    fc: string;
    engines: Engine[];
    apu: Apu;
    limits: Limit[];
    lgs: Gear[];
    legs: Leg[];
}
export declare const AircraftSchema: mongoose.Schema<Aircraft, mongoose.Model<Aircraft, any, any, any, mongoose.Document<unknown, any, Aircraft> & Omit<Aircraft & Required<{
    _id: Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Aircraft, mongoose.Document<unknown, {}, mongoose.FlatRecord<Aircraft>> & Omit<mongoose.FlatRecord<Aircraft> & Required<{
    _id: Types.ObjectId;
}>, never>>;
