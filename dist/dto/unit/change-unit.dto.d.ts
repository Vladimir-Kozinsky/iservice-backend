import { Types } from "mongoose";
export declare class ChangeUnitDto {
    readonly _id: Types.ObjectId;
    readonly ata: string;
    readonly pn: string;
    readonly sn: string;
    readonly type: string;
    readonly desc: string;
    readonly grn: string;
    readonly quantity: string;
    readonly eapack: string;
    readonly location: string;
    readonly rack: string;
    readonly shelf: string;
    readonly condition: string;
    readonly lifelimit: string;
    readonly shelflife: string;
    readonly remarks: string;
}
