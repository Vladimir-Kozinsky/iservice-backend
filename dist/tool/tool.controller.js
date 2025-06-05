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
exports.ToolController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tool_service_1 = require("./tool.service");
const tool_schema_1 = require("../schemas/tool.schema");
const create_tool_dto_1 = require("../dto/tool/create-tool.dto");
const change_tool_dto_1 = require("../dto/tool/change-tool.dto");
const get_tools_dto_1 = require("../dto/tool/get-tools.dto");
const print_tools_dto_1 = require("../dto/tool/print-tools.dto");
let ToolController = class ToolController {
    constructor(toolService) {
        this.toolService = toolService;
    }
    async create(createUnitDto) {
        return await this.toolService.createTool(createUnitDto);
    }
    async edit(editUnitDto) {
        return await this.toolService.editTool(editUnitDto);
    }
    async delete(deleteUnitDto) {
        return await this.toolService.deleteTool(deleteUnitDto);
    }
    async units(getUnitsDto) {
        return await this.toolService.getTools(getUnitsDto);
    }
    async print(getPrintUnitsDto) {
        return await this.toolService.getPrintTools(getPrintUnitsDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add tool' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: tool_schema_1.Tool }),
    (0, common_1.Post)('/create'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tool_dto_1.CreateToolDto]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Edit tool' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: tool_schema_1.Tool }),
    (0, common_1.Post)('/edit'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_tool_dto_1.ChangeToolDto]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete tool' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: tool_schema_1.Tool }),
    (0, common_1.Post)('/delete'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get tools' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: tool_schema_1.Tool }),
    (0, common_1.Post)('/tools'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tools_dto_1.GetToolsDto]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "units", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get print tools' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: tool_schema_1.Tool }),
    (0, common_1.Post)('/print'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [print_tools_dto_1.GetPrintToolsDto]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "print", null);
ToolController = __decorate([
    (0, swagger_1.ApiTags)('Tool'),
    (0, common_1.Controller)('tool'),
    __metadata("design:paramtypes", [tool_service_1.ToolService])
], ToolController);
exports.ToolController = ToolController;
//# sourceMappingURL=tool.controller.js.map