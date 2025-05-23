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

    @ApiProperty({ example: 'Approved', description: 'PO status' })
    @Prop({ required: true })
    status: string;


    @ApiProperty({ example: 'None', description: 'Request items' })
    @Prop({ required: true })
    items: [
        item: number,
        pn: string,
        desc: string,
        ref: string,
        quantity: number,
        poRef: string,
    ];

    @ApiProperty({ example: 'Approved', description: 'Request status' })
    @Prop({ required: false })
    statusHistory: [
        {
            date: string,
            status: string,
            remark: string,
            user: string,
        }
    ];
}


export const RequestSchema = SchemaFactory.createForClass(Request);
