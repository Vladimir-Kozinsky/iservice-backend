import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class SplitUnitDto {

    @IsNotEmpty()
    readonly _id: Types.ObjectId;

    @ApiProperty({ example: '10', description: 'Parts quantity' })
    @IsNotEmpty()
    readonly quantity: number;

    @ApiProperty({ example: 'EA7689', description: 'Work order Number' })
    @IsNotEmpty()
    readonly splitQuantity: string;

    @ApiProperty({ example: '25.06.2029', description: 'Usage date' })
    @IsNotEmpty()
    readonly date: string;

    @ApiProperty({ example: 'EX-37017', description: 'Aircraft' })
    @IsNotEmpty()
    readonly location: string;

    @ApiProperty({ example: 'EX-37017', description: 'Aircraft' })
    @IsNotEmpty()
    readonly splitLocation: string;

}