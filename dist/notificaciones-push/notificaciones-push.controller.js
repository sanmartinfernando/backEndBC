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
const notificaciones_push_service_1 = require("./notificaciones-push.service");
const nest_morgan_1 = require("nest-morgan");
let NotificacionesPushController = class NotificacionesPushController {
    constructor(notificacionService) {
        this.notificacionService = notificacionService;
    }
    async createToken(token) {
        const createToken = await this.notificacionService.createToken(token);
        return createToken;
    }
    async getTokens() {
        const tokens = await this.notificacionService.getTokens();
        return tokens;
    }
    async getTokensId(id) {
        const getTokensId = await this.notificacionService.getTokenId(id);
        return getTokensId;
    }
    async deleteTokenId(id) {
        const token = this.notificacionService.deleteTokenId(id);
        return token;
    }
};
__decorate([
    common_1.UseInterceptors(nest_morgan_1.MorganInterceptor('dev')),
    common_1.Post('/createToken'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionesPushController.prototype, "createToken", null);
__decorate([
    common_1.UseInterceptors(nest_morgan_1.MorganInterceptor('dev')),
    common_1.Get('/getTokens'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificacionesPushController.prototype, "getTokens", null);
__decorate([
    common_1.UseInterceptors(nest_morgan_1.MorganInterceptor('dev')),
    common_1.Get('/getTokensId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificacionesPushController.prototype, "getTokensId", null);
__decorate([
    common_1.UseInterceptors(nest_morgan_1.MorganInterceptor('dev')),
    common_1.Delete('/deleteTokenId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacionesPushController.prototype, "deleteTokenId", null);
NotificacionesPushController = __decorate([
    common_1.Controller('notificaciones-push'),
    __metadata("design:paramtypes", [notificaciones_push_service_1.NotificacionesPushService])
], NotificacionesPushController);
exports.NotificacionesPushController = NotificacionesPushController;
//# sourceMappingURL=notificaciones-push.controller.js.map