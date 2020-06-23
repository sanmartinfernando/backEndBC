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
const mongoose_1 = require("mongoose");
let NotificacionesPushService = class NotificacionesPushService {
    constructor(tokenModel) {
        this.tokenModel = tokenModel;
    }
    async createToken(createToken) {
        console.log(createToken);
        const user = await this.getTokenId(createToken.userid);
        if (user === null) {
            const token = await new this.tokenModel(createToken).save();
            return token;
        }
        else {
            console.log('actualizacion token', createToken);
            const filter = { userid: user.userid };
            const update = { token: createToken.token };
            user.token = createToken.token;
            user.save();
            return user;
        }
    }
    async getTokens() {
        const CatalogNoti = await this.tokenModel.find();
        return CatalogNoti;
    }
    async getTokenId(id) {
        const getNotifId = await this.tokenModel.findOne({ userid: id });
        return getNotifId;
    }
    async deleteTokenId(id) {
        const deleteNotif = await this.tokenModel.findByIdAndDelete(id);
        return deleteNotif;
    }
};
NotificacionesPushService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('NOTIPUSH_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NotificacionesPushService);
exports.NotificacionesPushService = NotificacionesPushService;
//# sourceMappingURL=notificaciones-push.service.js.map