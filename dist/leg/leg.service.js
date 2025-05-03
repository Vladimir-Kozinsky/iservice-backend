"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const aircraft_schema_1 = require("../schemas/aircraft.schema");
const mongoose_2 = require("mongoose");
const leg_schema_1 = require("../schemas/leg.schema");
const engine_schema_1 = require("../schemas/engine.schema");
const gear_schema_1 = require("../schemas/gear.schema");
let LegService = class LegService {
    constructor(legModel, aircraftModel, engineModel, gearModel) {
        this.legModel = legModel;
        this.aircraftModel = aircraftModel;
        this.engineModel = engineModel;
        this.gearModel = gearModel;
    }
    async getLegs(getLegsDto) {
        const pageLegs = 10;
        const aircraft = await this.aircraftModel.findOne({ msn: getLegsDto.aircraft });
        if (!aircraft)
            throw new common_1.HttpException('Aircraft not found', common_1.HttpStatus.BAD_REQUEST);
        const legs = aircraft.legs;
        if (!legs.length)
            throw new common_1.HttpException('Aircraft legs not found', common_1.HttpStatus.BAD_REQUEST);
        const filteredLegs = legs.filter((leg) => {
            const from = new Date(getLegsDto.from);
            const to = new Date(getLegsDto.to);
            const legDate = new Date(leg.depDate);
            return (legDate > from || legDate.getTime() === from.getTime())
                && (legDate < to || legDate.getTime() === to.getTime());
        });
        const sortedLegs = this.sortLegs(filteredLegs);
        const totalPages = Math.ceil(sortedLegs.length / pageLegs);
        const legsPortion = sortedLegs.splice(getLegsDto.page * pageLegs - pageLegs, pageLegs);
        const response = {
            totalPages: totalPages,
            currentPage: +getLegsDto.page,
            legs: legsPortion
        };
        return response;
    }
    async getLastTenLegs(aircraftMsn) {
        const aircraft = await this.aircraftModel.findOne({ msn: aircraftMsn });
        if (!aircraft)
            throw new common_1.HttpException('Aircraft not found', common_1.HttpStatus.BAD_REQUEST);
        const legs = aircraft.legs;
        if (!legs.length)
            throw new common_1.HttpException('Aircraft legs not found', common_1.HttpStatus.BAD_REQUEST);
        const sortedLegs = this.sortLegs(legs);
        return sortedLegs.splice(0, 10);
    }
    async getPrintLegs(getPrintLegsDto) {
        const aircraft = await this.aircraftModel.findOne({ msn: getPrintLegsDto.aircraft });
        if (!aircraft)
            throw new common_1.HttpException('Aircraft not found', common_1.HttpStatus.BAD_REQUEST);
        if (!aircraft.legs.length)
            throw new common_1.HttpException('Aircraft legs not found', common_1.HttpStatus.BAD_REQUEST);
        const filteredLegs = aircraft.legs.filter((leg) => {
            const from = new Date(getPrintLegsDto.from);
            const to = new Date(getPrintLegsDto.to);
            const legDate = new Date(leg.depDate);
            return (legDate > from || legDate.getTime() === from.getTime())
                && (legDate < to || legDate.getTime() === to.getTime());
        });
        const sortedLegs = this.sortLegs(filteredLegs);
        return sortedLegs;
    }
    async createLeg(createLegDto) {
        const newLeg = await this.legModel.create(createLegDto);
        const aircraft = await this.aircraftModel.findOne({ msn: createLegDto.aircraft });
        if (!aircraft)
            throw new common_1.HttpException('Aircraft not found', common_1.HttpStatus.BAD_REQUEST);
        aircraft.legs.push(newLeg);
        await aircraft.save();
        const updatedAircraft = await this.aircraftModel.findOne({ msn: createLegDto.aircraft });
        if (!updatedAircraft)
            throw new common_1.HttpException('Aircraft not found', common_1.HttpStatus.BAD_REQUEST);
        const sortedLegs = this.sortLegs(updatedAircraft.legs);
        updatedAircraft.legs = this.reculcLegsFhFc(sortedLegs, updatedAircraft.initFh, updatedAircraft.initFc);
        const updatedFfFc = this.reculcFhFc(updatedAircraft);
        updatedAircraft.fh = updatedFfFc.fh;
        updatedAircraft.fc = updatedFfFc.fc;
        await updatedAircraft.save();
        createLegDto.engines.forEach(async (eng) => {
            const engine = await this.engineModel.findOne({ msn: eng.msn });
            if (!engine)
                throw new common_1.HttpException('Engine not found', common_1.HttpStatus.BAD_REQUEST);
            engine.legs.push(newLeg);
            await engine.save();
            const updatedEngine = await this.engineModel.findOne({ msn: eng.msn });
            if (!updatedEngine)
                throw new common_1.HttpException('Engine not found', common_1.HttpStatus.BAD_REQUEST);
            const sortedLegs = this.sortLegs(updatedEngine.legs);
            updatedEngine.legs = this.reculcLegsFhFc(sortedLegs, updatedEngine.initFh, updatedEngine.initFc);
            const updatedFfFc = this.reculcFhFc(updatedEngine);
            updatedEngine.tsn = updatedFfFc.fh;
            updatedEngine.csn = updatedFfFc.fc;
            await updatedEngine.save();
            const updateLimits = this.reculcEngineLLP(updatedEngine);
            await this.engineModel.updateOne({ msn: eng.msn }, { $set: { limits: updateLimits } });
        });
        createLegDto.gears.forEach(async (g) => {
            const gear = await this.gearModel.findOne({ sn: g.sn });
            if (!gear)
                throw new common_1.HttpException('Gear not found', common_1.HttpStatus.BAD_REQUEST);
            gear.legs.push(newLeg);
            await gear.save();
            const updatedGear = await this.gearModel.findOne({ sn: g.sn });
            if (!updatedGear)
                throw new common_1.HttpException('Gear not found', common_1.HttpStatus.BAD_REQUEST);
            const sortedLegs = this.sortLegs(updatedGear.legs);
            updatedGear.legs = this.reculcLegsFhFc(sortedLegs, updatedGear.initFh, updatedGear.initFc);
            const updatedFfFc = this.reculcFhFc(updatedGear);
            updatedGear.tsn = updatedFfFc.fh;
            updatedGear.csn = updatedFfFc.fc;
            await updatedGear.save();
            const updatedLimits = this.reculcGearLLP(updatedGear);
            await this.gearModel.updateOne({ sn: g.sn }, { $set: { limits: updatedLimits } });
        });
        await this.legModel.findByIdAndRemove(newLeg._id);
        return updatedAircraft;
    }
    async deleteLeg(deleteLegDto) {
        const aircraft = await this.aircraftModel.findOne({ msn: deleteLegDto.aircraft });
        const index = aircraft.legs.findIndex((leg) => leg._id.toString() === deleteLegDto._id.toString());
        aircraft.legs.splice(index, 1);
        aircraft.legs = this.reculcLegsFhFc(aircraft.legs, aircraft.initFh, aircraft.initFc);
        const updatedFfFc = this.reculcFhFc(aircraft);
        aircraft.fh = updatedFfFc.fh;
        aircraft.fc = updatedFfFc.fc;
        await aircraft.save();
        deleteLegDto.engines.forEach(async (eng) => {
            const engine = await this.engineModel.findOne({ msn: eng.msn });
            if (!engine)
                throw new common_1.HttpException('Engine not found', common_1.HttpStatus.BAD_REQUEST);
            const index = engine.legs.findIndex((leg) => leg._id.toString() === deleteLegDto._id.toString());
            engine.legs.splice(index, 1);
            await engine.save();
            const updatedEngine = await this.engineModel.findOne({ msn: eng.msn });
            if (!engine)
                throw new common_1.HttpException('Engine not found', common_1.HttpStatus.BAD_REQUEST);
            const sortedLegs = this.sortLegs(updatedEngine.legs);
            updatedEngine.legs = this.reculcLegsFhFc(sortedLegs, updatedEngine.initFh, updatedEngine.initFc);
            const updatedFfFc = this.reculcFhFc(updatedEngine);
            updatedEngine.tsn = updatedFfFc.fh;
            updatedEngine.csn = updatedFfFc.fc;
            await updatedEngine.save();
            const updateLimits = this.reculcEngineLLP(updatedEngine);
            await this.engineModel.updateOne({ msn: eng.msn }, { $set: { limits: updateLimits } });
        });
        deleteLegDto.gears.forEach(async (lg) => {
            const gear = await this.gearModel.findOne({ sn: lg.sn });
            if (!gear)
                throw new common_1.HttpException('Engine not found', common_1.HttpStatus.BAD_REQUEST);
            const index = gear.legs.findIndex((leg) => leg._id.toString() === deleteLegDto._id.toString());
            gear.legs.splice(index, 1);
            await gear.save();
            const updatedGear = await this.gearModel.findOne({ sn: lg.sn });
            if (!updatedGear)
                throw new common_1.HttpException('Engine not found', common_1.HttpStatus.BAD_REQUEST);
            const sortedLegs = this.sortLegs(updatedGear.legs);
            updatedGear.legs = this.reculcLegsFhFc(sortedLegs, updatedGear.initFh, updatedGear.initFc);
            const updatedFfFc = this.reculcFhFc(updatedGear);
            updatedGear.tsn = updatedFfFc.fh;
            updatedGear.csn = updatedFfFc.fc;
            await updatedGear.save();
            const updatedLimits = this.reculcGearLLP(updatedGear);
            await this.gearModel.updateOne({ sn: lg.sn }, { $set: { limits: updatedLimits } });
        });
        return deleteLegDto._id;
    }
    sortLegs(legs) {
        return legs.sort((a, b) => {
            const aLegDate = new Date(`${a.depDate} ${a.takeOff}`);
            const bLegDate = new Date(`${b.depDate} ${b.takeOff}`);
            if (aLegDate.getTime() < bLegDate.getTime())
                return -1;
            if (aLegDate.getTime() > bLegDate.getTime())
                return 1;
            return 0;
        });
    }
    reculcFhFc(aircraft) {
        const toMins = (str) => {
            const hh = +str.split(':')[0] * 60;
            const mm = +str.split(':')[1];
            return hh + mm;
        };
        const minsToStr = (mins) => {
            const hh = Math.floor(mins / 60);
            const mm = mins % 60;
            return `${hh}:${mm}`;
        };
        const fh = aircraft.legs.reduce((prevValue, item, index) => {
            prevValue += toMins(item.flightTime);
            item.fh = minsToStr(prevValue);
            item.fc = (+aircraft.initFc + (+index + 1)).toString();
            return prevValue;
        }, toMins(aircraft.initFh));
        return {
            fh: minsToStr(fh),
            fc: (+aircraft.initFc + aircraft.legs.length).toString()
        };
    }
    reculcLegsFhFc(legs, initFh, initFc) {
        const toMins = (str) => {
            const hh = +str.split(':')[0] * 60;
            const mm = +str.split(':')[1];
            return hh + mm;
        };
        const minsToStr = (mins) => {
            const hh = Math.floor(mins / 60);
            const mm = mins % 60;
            return `${hh}:${mm}`;
        };
        const sortedLegs = this.sortLegs(legs);
        const updatedFhFcLegs = sortedLegs.map((leg, index, legs) => {
            if (index == 0) {
                leg.fh = minsToStr(toMins(initFh) + toMins(leg.flightTime));
                leg.fc = (+initFc + 1).toString();
                return leg;
            }
            else {
                const prevFh = legs[index - 1].fh;
                const prevFc = legs[index - 1].fc;
                leg.fh = minsToStr(toMins(prevFh) + toMins(leg.flightTime));
                leg.fc = (+prevFc + 1).toString();
                return leg;
            }
        });
        return updatedFhFcLegs;
    }
    reculcEngineLLP(engine) {
        const updatedLimits = engine.limits.map((limit) => {
            switch (engine.thrust) {
                case '20000':
                    const updatedLimitA = (+engine.csn - (+limit.engCsn)) + (+limit.initCsnA);
                    limit.csnA = updatedLimitA.toString();
                    return limit;
                case '22000':
                    const updatedLimitB = (+engine.csn - (+limit.engCsn)) + (+limit.initCsnB);
                    limit.csnB = updatedLimitB.toString();
                    return limit;
                case '23500':
                    const updatedLimitC = (+engine.csn - (+limit.engCsn)) + (+limit.initCsnC);
                    limit.csnC = updatedLimitC.toString();
                    return limit;
                default:
                    return limit;
            }
        });
        return updatedLimits;
    }
    reculcGearLLP(gear) {
        const toMins = (str) => {
            const hh = +str.split(':')[0] * 60;
            const mm = +str.split(':')[1];
            return hh + mm;
        };
        const minsToStr = (mins) => {
            const hh = Math.floor(mins / 60);
            const mm = mins % 60;
            return `${hh}:${mm}`;
        };
        const updatedLimits = gear.limits.map((limit) => {
            const updatedTsn = minsToStr(toMins(gear.tsn) - toMins(limit.gearTsn) + toMins(limit.initTsn));
            const updatedCsn = (+gear.csn - (+limit.gearCsn)) + (+limit.initCsn);
            limit.tsn = updatedTsn;
            limit.csn = updatedCsn.toString();
            return limit;
        });
        return updatedLimits;
    }
};
LegService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(leg_schema_1.Leg.name)),
    __param(1, (0, mongoose_1.InjectModel)(aircraft_schema_1.Aircraft.name)),
    __param(2, (0, mongoose_1.InjectModel)(engine_schema_1.Engine.name)),
    __param(3, (0, mongoose_1.InjectModel)(gear_schema_1.Gear.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], LegService);
exports.LegService = LegService;
//# sourceMappingURL=leg.service.js.map