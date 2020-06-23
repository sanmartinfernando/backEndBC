"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const productos_controller_1 = require("./productos.controller");
const productos_service_1 = require("./productos.service");
const productos_providers_1 = require("./productos.providers");
const database_module_1 = require("../database/database.module");
const platform_express_1 = require("@nestjs/platform-express");
let ProductosModule = class ProductosModule {
};
ProductosModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, platform_express_1.MulterModule.register({
                dest: './uploads/',
            })],
        controllers: [productos_controller_1.ProductosController],
        providers: [productos_service_1.ProductosService, ...productos_providers_1.produProviders]
    })
], ProductosModule);
exports.ProductosModule = ProductosModule;
//# sourceMappingURL=productos.module.js.map