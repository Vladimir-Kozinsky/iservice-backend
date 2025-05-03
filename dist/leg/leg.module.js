"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegModule = void 0;
const common_1 = require("@nestjs/common");
const leg_controller_1 = require("./leg.controller");
const leg_service_1 = require("./leg.service");
const mongoose_1 = require("@nestjs/mongoose");
const aircraft_schema_1 = require("../schemas/aircraft.schema");
const leg_schema_1 = require("../schemas/leg.schema");
const engine_schema_1 = require("../schemas/engine.schema");
const gear_schema_1 = require("../schemas/gear.schema");
let LegModule = class LegModule {
};
LegModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: leg_schema_1.Leg.name,
                    schema: leg_schema_1.LegSchema
                }]),
            mongoose_1.MongooseModule.forFeature([{
                    name: aircraft_schema_1.Aircraft.name,
                    schema: aircraft_schema_1.AircraftSchema
                }]),
            mongoose_1.MongooseModule.forFeature([{
                    name: engine_schema_1.Engine.name,
                    schema: engine_schema_1.EngineSchema
                }]),
            mongoose_1.MongooseModule.forFeature([{
                    name: gear_schema_1.Gear.name,
                    schema: gear_schema_1.GearSchema
                }])
        ],
        controllers: [leg_controller_1.LegController],
        providers: [leg_service_1.LegService]
    })
], LegModule);
exports.LegModule = LegModule;
//# sourceMappingURL=leg.module.js.map