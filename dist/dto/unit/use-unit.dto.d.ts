import { Types } from "mongoose";
export declare class UseUnitDto {
    readonly _id: Types.ObjectId;
    readonly quantity: number;
    readonly wo: string;
    readonly date: string;
    readonly aircraft: string;
    readonly remark: string;
}
