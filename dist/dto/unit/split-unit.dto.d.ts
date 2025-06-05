import { Types } from "mongoose";
export declare class SplitUnitDto {
    readonly _id: Types.ObjectId;
    readonly quantity: number;
    readonly splitQuantity: string;
    readonly date: string;
    readonly location: string;
    readonly splitLocation: string;
}
