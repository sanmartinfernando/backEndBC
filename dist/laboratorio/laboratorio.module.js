"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const laboratorio_controller_1 = require("./laboratorio.controller");
const database_module_1 = require("../database/database.module");
const laboratorio_service_1 = require("./laboratorio.service");
const laboratorio_providers_1 = require("./laboratorio.providers");
let LaboratorioModule = class LaboratorioModule {
};
LaboratorioModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [laboratorio_controller_1.LaboratorioController, laboratorio_controller_1.CatalogoLabController, laboratorio_controller_1.DetalleLabController, laboratorio_controller_1.UnidadLabController, laboratorio_controller_1.CampoLabController, laboratorio_controller_1.OrdenLabController],
        providers: [laboratorio_service_1.LaboratorioService, ...laboratorio_providers_1.laboProviders, laboratorio_service_1.CatalogoLabService, laboratorio_service_1.DetalleLabService, laboratorio_service_1.UnidadLabService, laboratorio_service_1.CampoLabService, laboratorio_service_1.OrdenLabService],
    })
], LaboratorioModule);
exports.LaboratorioModule = LaboratorioModule;
//# sourceMappingURL=laboratorio.module.js.map