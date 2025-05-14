import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Types } from 'mongoose';

export type RequestDocument = HydratedDocument<Request>;

@Schema()
export class Request {

    _id: Types.ObjectId;

    @ApiProperty({ example: '2589134', description: 'Request Number' })
    @Prop({ required: true })
    requestNumber: string;

    @ApiProperty({ example: '25.06.2029', description: 'Request date' })
    @Prop({ required: true })
    date: string;

    @ApiProperty({ example: 'A', description: 'Request priority' })
    @Prop({ required: true })
    priority: string;

    @ApiProperty({ example: 'None', description: 'Request items' })
    @Prop({ required: true })
    items: [
        item: number,
        pn: string,
        desc: string,
        ref: string,
        quantity: number
    ];

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who created request' })
    @Prop({ required: true })
    requestedBy: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who approved request' })
    @Prop({ required: false })
    approvedBy: string;

    @ApiProperty({ example: '25.06.2029', description: 'Request approve date' })
    @Prop({ required: false })
    approvedDate: string;
}


export const RequestSchema = SchemaFactory.createForClass(Request);
