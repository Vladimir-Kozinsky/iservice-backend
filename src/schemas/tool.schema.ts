import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Types } from 'mongoose';

export type ToolDocument = HydratedDocument<Tool>;

@Schema()
export class Tool {

    _id: Types.ObjectId;

    @ApiProperty({ example: '2589134', description: 'Part Number' })
    @Prop({ required: true })
    pn: string;

    @ApiProperty({ example: '289134', description: 'Serial Number' })
    @Prop({ required: false })
    sn: string;

    @ApiProperty({ example: 'Consumables', description: 'Parts type' })
    @Prop({ required: true })
    type: string;

    @ApiProperty({ example: 'CSD', description: 'Part description' })
    @Prop({ required: true })
    desc: string;

    @ApiProperty({ example: '10', description: 'Parts quantity' })
    @Prop({ required: true })
    quantity: number;

    @ApiProperty({ example: 'Sharjah', description: 'Parts location' })
    @Prop({ required: true })
    location: string;

    @ApiProperty({ example: '1', description: 'Rack location' })
    @Prop({ required: false })
    rack: string;

    @ApiProperty({ example: '2', description: 'Shelf location' })
    @Prop({ required: false })
    shelf: string;

    @ApiProperty({ example: '25.05.2025', description: 'Due calibration date' })
    @Prop({ required: false })
    calibration: string;

    @ApiProperty({ example: 'Remarks', description: 'Remarks' })
    @Prop({ required: false })
    remarks: string;


}


export const ToolSchema = SchemaFactory.createForClass(Tool);
