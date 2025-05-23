import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {

    _id: Types.ObjectId;

    @ApiProperty({ example: 'NWC523213', description: 'PO Number' })
    @Prop({ required: true })
    poNumber: string;

    @ApiProperty({ example: '2025-02-03', description: 'PO create date' })
    @Prop({ required: true })
    poDate: string;

    @ApiProperty({ example: '2589134', description: 'Request Number' })
    @Prop({ required: true })
    requestNumber: string;

    @ApiProperty({ example: '289134', description: 'Parts' })
    @Prop({ required: true })
    items: [
        {
            pn: string;
            desc: string;
            ref: string;
            quantity: number;
            uom: string;
            price: string;
            totalprice: string;
        }
    ]

    @ApiProperty({ example: '4654564dh', description: 'Total PO price' })
    @Prop({ required: true })
    poPrice: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @Prop({ required: true })
    customer: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @Prop({ required: true })
    billTo: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @Prop({ required: true })
    supplier: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @Prop({ required: false })
    shipAdress: string;

    @ApiProperty({ example: 'Approved', description: 'PO status' })
    @Prop({ required: true })
    status: string;

    @ApiProperty({ example: 'Approved', description: 'PO status' })
    @Prop({ required: false })
    statusHistory: [
        {
            date: string,
            status: string, 
            remark: string,
            user: string,
        }
    ];

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who approved request' })
    @Prop({ required: false })
    acceptedBy: string;

    @ApiProperty({ example: '25.06.2029', description: 'Request approve date' })
    @Prop({ required: false })
    acceptedDate: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who approved request' })
    @Prop({ required: false })
    approvedBy: string;

    @ApiProperty({ example: '25.06.2029', description: 'Request approve date' })
    @Prop({ required: false })
    approvedDate: string;
}


export const OrderSchema = SchemaFactory.createForClass(Order);
