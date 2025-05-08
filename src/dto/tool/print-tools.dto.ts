import { ApiProperty } from "@nestjs/swagger";

export class GetPrintToolsDto {

    @ApiProperty({ example: 'Manas', description: 'Location' })
    readonly locationFilter: string[];

    @ApiProperty({ example: 'wheel', description: 'Search text' })
    readonly searchText: string;
}