import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ApproveRequestsDto {

    @ApiProperty({ example: '2589134', description: 'Request Number' })
    @IsNotEmpty()
    readonly requestNumber: string;

    @ApiProperty({ example: 'Ovcharenco', description: 'Name who approved request' })
    @IsNotEmpty()
    readonly approvedBy: string;
}