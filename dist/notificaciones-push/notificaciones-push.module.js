"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const notificaciones_push_controller_1 = require("./notificaciones-push.controller");
const notificaciones_push_service_1 = require("./notificaciones-push.service");
const database_module_1 = require("../database/database.module");
const notificaciones_push_providers_1 = require("./notificaciones-push.providers");
const nest_morgan_1 = require("nest-morgan");
let NotificacionesPushModule = class NotificacionesPushModule {
};
NotificacionesPushModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, nest_morgan_1.MorganModule.forRoot()],
        controllers: [notificaciones_push_controller_1.NotificacionesPushController],
        providers: [notificaciones_push_service_1.NotificacionesPushService, ...notificaciones_push_providers_1.notifiProviders]
    })
], NotificacionesPushModule);
exports.NotificacionesPushModule = NotificacionesPushModule;
//# sourceMappingURL=notificaciones-push.module.js.map