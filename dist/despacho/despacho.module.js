"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const despacho_controller_1 = require("./despacho.controller");
const despacho_service_1 = require("./despacho.service");
const database_module_1 = require("../database/database.module");
const despacho_providers_1 = require("./despacho.providers");
let DespachoModule = class DespachoModule {
};
DespachoModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [despacho_controller_1.DespachoController],
        providers: [despacho_service_1.DespachoService, ...despacho_providers_1.despaProviders]
    })
], DespachoModule);
exports.DespachoModule = DespachoModule;
//# sourceMappingURL=despacho.module.js.map