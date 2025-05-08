import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SearchToolsDto {

    @ApiProperty({ example: 'whell', description: 'Search text' })
    @IsNotEmpty()
    readonly text: string;

    @ApiProperty({ example: '25', description: 'Tools at page' })
    @IsNotEmpty()
    readonly toolsAtPage: number;
    
}