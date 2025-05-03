import { EngineHistory } from "src/schemas/engineHistory.schema";
import { Leg } from "src/schemas/leg.schema";
import { Limit } from "src/schemas/limit.schema";
export declare class CreateEngineDto {
    readonly type: string;
    readonly thrust: string;
    readonly msn: string;
    readonly manufDate: string;
    readonly manuf: string;
    initFh: string;
    initFc: string;
    readonly tsn: string;
    readonly csn: string;
    readonly engineHistory: EngineHistory;
    readonly lastOverhaulDate: string;
    readonly tsnAtLastOverhaul: string;
    readonly csnAtLastOverhaul: string;
    readonly limits: [Limit];
    readonly legs: [Leg];
}
