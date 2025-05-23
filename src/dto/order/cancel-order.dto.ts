import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CancelOrderDto {

    @ApiProperty({ example: '2589134', description: 'PO Number' })
    @IsNotEmpty()
    readonly poNumber: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who cancelled order' })
    @IsNotEmpty()
    readonly canceledBy: string;
}