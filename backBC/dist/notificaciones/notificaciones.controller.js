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
const common_1 = require("@nestjs/common");
const notificaciones_service_1 = require("./notificaciones.service");
const notificacion_dto_1 = require("./dto/notificacion-dto");
let NotificacionesController = class NotificacionesController {
    constructor(notificacionService) {
        this.notificacionService = notificacionService;
    }
    async createNotifi(createNoti) {
        const createNotifi = await this.notificacionService.createNotify(createNoti);
        return createNotifi;
    }
    async getNoti() {
        const getNoti = await this.notificacionService.getNotify();
        return getNoti;
    }
    async getNotifId(id) {
        const getNotifId = await this.notificacionService.getNotifId(id);
        return getNotifId;
    }
    async getNotifIdPac(id) {
        const getNotifId = await this.notificacionService.getNotifIdPac(id);
        return getNotifId;
    }
    async getNotifIdMed(id) {
        const getNotifId = await this.notificacionService.getNotifIdMed(id);
        return getNotifId;
    }
    async updateCatLab(updateNotify) {
        const updateNotif = await this.notificacionService.updateNotify(updateNotify['id'], updateNotify);
        return updateNotif;
    }
    async updateAllNotify(id) {
        console.log('if', id);
        const getNotifId = await this.notificacionService.updateAllNotify(id);
        return getNotifId;
    }
    async deleteNotify(id) {
        const deleteNotif = this.notificacionService.deleteNotify(id);
        return deleteNotif;
    }
    async deleteLogNotify(updateNotify) {
        const deleteLogNotif = await this.notificacionService.deleteLogNotify(updateNotify['id'], updateNotify);
        return deleteLogNotif;
    }
    async listarNotifyDelete() {
        const listarNotifDelete = await this.notificacionService.listarNotifyDelete();
        return listarNotifDelete;
    }
};
__decorate([
    common_1.Post('/createNotify'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notificacion_dto_1.NotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "createNotifi", null);
__decorate([
    common_1.Get('/getNotify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "getNoti", null);
__decorate([
    common_1.Get('/getNotifId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "getNotifId", null);
__decorate([
    common_1.Get('/getNotifIdPac/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "getNotifIdPac", null);
__decorate([
    common_1.Get('/getNotifIdMed/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "getNotifIdMed", null);
__decorate([
    common_1.Put('/updateNotify'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notificacion_dto_1.NotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "updateCatLab", null);
__decorate([
    common_1.Put('/updateAllNotify/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "updateAllNotify", null);
__decorate([
    common_1.Delete('/deleteNotify/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "deleteNotify", null);
__decorate([
    common_1.Put('/deleteLogNotify'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notificacion_dto_1.NotificacionDto]),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "deleteLogNotify", null);
__decorate([
    common_1.Get('/listarNotifyDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificacionesController.prototype, "listarNotifyDelete", null);
NotificacionesController = __decorate([
    common_1.Controller('notificaciones'),
    __metadata("design:paramtypes", [notificaciones_service_1.NotificacionesService])
], NotificacionesController);
exports.NotificacionesController = NotificacionesController;
//# sourceMappingURL=notificaciones.controller.js.map