"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const inventario_controller_1 = require("./inventario.controller");
const inventario_service_1 = require("./inventario.service");
const database_module_1 = require("../database/database.module");
const inventario_providers_1 = require("./inventario.providers");
let InventarioModule = class InventarioModule {
};
InventarioModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [inventario_controller_1.InventarioController, inventario_controller_1.FarmController],
        providers: [inventario_service_1.InventarioService, ...inventario_providers_1.produInventario, inventario_service_1.FarmaciaService]
    })
], InventarioModule);
exports.InventarioModule = InventarioModule;
//# sourceMappingURL=inventario.module.js.map