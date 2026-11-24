import { ApiProperty } from "@nestjs/swagger";

export class GetPrintOrdersDto {

    @ApiProperty({ example: 'Open', description: 'Status' })
    readonly statusFilter: string[];

}