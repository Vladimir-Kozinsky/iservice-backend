import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CancelRequestDto {

    @ApiProperty({ example: '2589134', description: 'PO Number' })
    @IsNotEmpty()
    readonly requestNumber: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who cancelled order' })
    @IsNotEmpty()
    readonly canceledBy: string;
}