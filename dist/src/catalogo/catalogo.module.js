"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const catalogo_service_1 = require("./catalogo.service");
const catalogo_controller_1 = require("./catalogo.controller");
const database_module_1 = require("../database/database.module");
const catalogo_providers_1 = require("./catalogo.providers");
let CatalogoModule = class CatalogoModule {
};
CatalogoModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [catalogo_controller_1.TipoCatalogoController, catalogo_controller_1.CatalogoController],
        providers: [catalogo_service_1.TipoCatalogoService, ...catalogo_providers_1.cataProviders, catalogo_service_1.CatalogoService]
    })
], CatalogoModule);
exports.CatalogoModule = CatalogoModule;
//# sourceMappingURL=catalogo.module.js.map