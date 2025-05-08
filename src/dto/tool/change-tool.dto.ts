import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class ChangeToolDto {

    @IsNotEmpty()
    readonly _id: Types.ObjectId;

    @ApiProperty({ example: '2589134', description: 'Part Number' })
    @IsNotEmpty()
    readonly pn: string;

    @ApiProperty({ example: '289134', description: 'Serial Number' })
    readonly sn: string;

    @ApiProperty({ example: 'Consumables', description: 'Parts type' })
    @IsNotEmpty()
    readonly type: string;

    @ApiProperty({ example: 'CSD', description: 'Part description' })
    @IsNotEmpty()
    readonly desc: string;

    @ApiProperty({ example: '10', description: 'Parts quantity' })
    @IsNotEmpty()
    readonly quantity: string;

    @ApiProperty({ example: 'Sharjah', description: 'Parts location' })
    @IsNotEmpty()
    readonly location: string;

    @ApiProperty({ example: '1', description: 'Rack location' })
    readonly rack: string;

    @ApiProperty({ example: '2', description: 'Shelf location' })
    readonly shelf: string;

    @ApiProperty({ example: '25.05.2025', description: 'Due calibration date' })
    readonly calibration: string;

    @ApiProperty({ example: 'Remarks', description: 'Remarks' })
    readonly remarks: string;
}