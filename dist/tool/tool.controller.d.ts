/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ToolService } from './tool.service';
import { Tool } from 'src/schemas/tool.schema';
import { CreateToolDto } from 'src/dto/tool/create-tool.dto';
import { ChangeToolDto } from 'src/dto/tool/change-tool.dto';
import { GetToolsDto } from 'src/dto/tool/get-tools.dto';
import { GetPrintToolsDto } from 'src/dto/tool/print-tools.dto';
export declare class ToolController {
    private readonly toolService;
    constructor(toolService: ToolService);
    create(createUnitDto: CreateToolDto): Promise<import("mongoose").Document<unknown, {}, Tool> & Omit<Tool & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    edit(editUnitDto: ChangeToolDto): Promise<import("mongoose").Document<unknown, {}, Tool> & Omit<Tool & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    delete(deleteUnitDto: {
        id: string;
    }): Promise<import("mongoose").Document<unknown, {}, Tool> & Omit<Tool & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    units(getUnitsDto: GetToolsDto): Promise<{
        totalPages: number;
        currentPage: number;
        tools: (import("mongoose").Document<unknown, {}, Tool> & Omit<Tool & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
    }>;
    print(getPrintUnitsDto: GetPrintToolsDto): Promise<(import("mongoose").Document<unknown, {}, Tool> & Omit<Tool & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
}
