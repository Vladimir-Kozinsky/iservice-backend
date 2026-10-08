import { Types } from "mongoose";
export declare class ChangeToolDto {
    readonly _id: Types.ObjectId;
    readonly pn: string;
    readonly sn: string;
    readonly type: string;
    readonly desc: string;
    readonly quantity: string;
    readonly location: string;
    readonly rack: string;
    readonly shelf: string;
    readonly calibration: string;
    readonly remarks: string;
}
