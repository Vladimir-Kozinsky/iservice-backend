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
import { UnitService } from './unit.service';
import { Unit } from 'src/schemas/unit.schema';
import { CreateUnitDto } from 'src/dto/unit/create-unit.dto';
import { GetUnitsDto } from 'src/dto/unit/get-units.dto';
import { ChangeUnitDto } from 'src/dto/unit/change-unit.dto';
import { UseUnitDto } from 'src/dto/unit/use-unit.dto';
import { GetPrintUnitsDto } from 'src/dto/unit/print-units.dto';
export declare class UnitController {
    private readonly unitService;
    constructor(unitService: UnitService);
    create(createUnitDto: CreateUnitDto): Promise<import("mongoose").Document<unknown, {}, Unit> & Omit<Unit & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    edit(editUnitDto: ChangeUnitDto): Promise<import("mongoose").Document<unknown, {}, Unit> & Omit<Unit & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    delete(deleteUnitDto: {
        id: string;
    }): Promise<import("mongoose").Document<unknown, {}, Unit> & Omit<Unit & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
    units(getUnitsDto: GetUnitsDto): Promise<{
        totalPages: number;
        currentPage: number;
        units: (import("mongoose").Document<unknown, {}, Unit> & Omit<Unit & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>, never>)[];
    }>;
    print(getPrintUnitsDto: GetPrintUnitsDto): Promise<(import("mongoose").Document<unknown, {}, Unit> & Omit<Unit & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
    use(useUnitDto: UseUnitDto): Promise<import("mongoose").Document<unknown, {}, Unit> & Omit<Unit & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>>;
}
