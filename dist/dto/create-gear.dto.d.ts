import { GearHistory } from "src/schemas/gearHistory.schema";
export declare class CreateGearDto {
    readonly pos: string;
    readonly pn: string;
    readonly sn: string;
    initFh: string;
    initFc: string;
    readonly tsn: string;
    csn: string;
    lastInspDate: string;
    readonly tsnAtLastInsp: string;
    readonly csnAtLastInsp: string;
    readonly nextInspDate: string;
    readonly tsnAtNextInsp: string;
    readonly csnAtNextInsp: string;
    readonly gearHistory: [GearHistory];
}
