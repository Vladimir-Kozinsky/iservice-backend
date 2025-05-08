"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolModule = void 0;
const common_1 = require("@nestjs/common");
const tool_controller_1 = require("./tool.controller");
const tool_service_1 = require("./tool.service");
const mongoose_1 = require("@nestjs/mongoose");
const tool_schema_1 = require("../schemas/tool.schema");
let ToolModule = class ToolModule {
};
ToolModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: tool_schema_1.Tool.name,
                    schema: tool_schema_1.ToolSchema
                }]),
        ],
        controllers: [tool_controller_1.ToolController],
        providers: [tool_service_1.ToolService]
    })
], ToolModule);
exports.ToolModule = ToolModule;
//# sourceMappingURL=tool.module.js.map