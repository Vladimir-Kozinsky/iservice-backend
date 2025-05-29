import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {

    @ApiProperty({ example: 'NWC523213', description: 'PO Number' })
    @IsNotEmpty()
    readonly poNumber: string;

    @ApiProperty({ example: '2025-02-03', description: 'PO create date' })
    @IsNotEmpty()
    readonly poDate: string;

    @ApiProperty({ example: '2589134', description: 'Request Number' })
    @IsNotEmpty()
    readonly requestNumber: string;

    @ApiProperty({ example: '289134', description: 'Parts' })
    @IsNotEmpty()
    readonly items: [
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
    @IsNotEmpty()
    readonly poPrice: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @IsNotEmpty()
    readonly customer: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @IsNotEmpty()
    readonly billTo: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @IsNotEmpty()
    readonly supplier: string;

    @ApiProperty({ example: 'Fly Tech', description: 'Company name and address' })
    @IsNotEmpty()
    readonly shipAdress: string;

    @ApiProperty({ example: 'Approved', description: 'PO status' })
    readonly status: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who approved request' })
    @IsNotEmpty()
    readonly createdBy: string;

}