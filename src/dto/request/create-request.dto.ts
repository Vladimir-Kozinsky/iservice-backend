import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRequestDto {

    @ApiProperty({ example: '2589134', description: 'Request Number' })
    @IsNotEmpty()
    readonly requestNumber: string;

    @ApiProperty({ example: '25.06.2029', description: 'Request date' })
    @IsNotEmpty()
    readonly date: string;

    @ApiProperty({ example: 'A', description: 'Request priority' })
    @IsNotEmpty()
    readonly priority: string;

    @ApiProperty({ example: 'None', description: 'Request items' })

    readonly items: [
        item: number,
        pn: string,
        desc: string,
        ref: string,
        quantity: number
    ];

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who created request' })
    @IsNotEmpty()
    readonly requestedBy: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who approved request' })
    readonly approvedBy: string;

    @ApiProperty({ example: '25.06.2029', description: 'Request approve date' })
    readonly approvedDate: string;

}