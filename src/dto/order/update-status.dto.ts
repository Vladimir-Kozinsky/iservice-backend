import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class updateOrderStatusDto {

    @ApiProperty({ example: '2589134', description: 'PO Number' })
    @IsNotEmpty()
    readonly poNumber: string;

    @ApiProperty({ example: 'Paid', description: 'PO status' })
    @IsNotEmpty()
    readonly status: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who updated request' })
    @IsNotEmpty()
    readonly user: string;

    @ApiProperty({ example: 'Remark', description: 'Remarks to PO status' })
    readonly remark: string;
}
