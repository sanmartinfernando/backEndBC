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
const despacho_service_1 = require("./despacho.service");
const despacho_dto_1 = require("./dto/despacho-dto");
let DespachoController = class DespachoController {
    constructor(despachoService) {
        this.despachoService = despachoService;
    }
    async createDespa(createDespa) {
        console.log(createDespa);
        const createProducto = await this.despachoService.createDespa(createDespa);
        console.log('createProducto', createProducto);
        return createProducto;
    }
    async getDespaAll() {
        const despachos = await this.despachoService.getDespa();
        return despachos;
    }
    async getDespaDate(date) {
        console.log('iddd', date);
        const despachos = await this.despachoService.getDespaDate(date);
        return despachos;
    }
    async getDespaIdPac(identiPac) {
        console.log('iddd', identiPac);
        const despachos = await this.despachoService.getDespaDateIdPac(identiPac);
        return despachos;
    }
    async getDespaDateNew(date) {
        console.log('iddd', date);
        const despachos = await this.despachoService.getDespaDateNew(date);
        return despachos;
    }
    async searchDespa(idReceta) {
        console.log('iddd', idReceta);
        const despa = await this.despachoService.searchDespa(idReceta);
        return despa;
    }
    async searchDespaIdRece(id) {
        const despa = await this.despachoService.searchDespaIdRece(id);
        return despa;
    }
    async searchDespaId(id) {
        const despa = await this.despachoService.searchDespaIdDespa(id);
        return despa;
    }
    async deleteDespa(id) {
        const deleteDespa = this.despachoService.deleteDespa(id);
        return deleteDespa;
    }
    async createCart(createJson) {
        const createJson2 = await this.despachoService.createCart(createJson);
        return createJson2;
    }
    async listCart(idPac) {
        const cartList = await this.despachoService.listCart(idPac);
        return cartList;
    }
    async deleteCart(id) {
        const deleteCart = this.despachoService.deleteCart(id);
        return deleteCart;
    }
    async updateTCat(updateReceDto) {
        console.log('iddd', updateReceDto);
        const tipoCatUpdate = await this.despachoService.updateDespa(updateReceDto['id'], updateReceDto);
        return tipoCatUpdate;
    }
};
__decorate([
    common_1.Post('/crearDespa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [despacho_dto_1.DespachoDto]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "createDespa", null);
__decorate([
    common_1.Get('/listarDespa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "getDespaAll", null);
__decorate([
    common_1.Get('/getDespaDate/:date'),
    __param(0, common_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "getDespaDate", null);
__decorate([
    common_1.Get('/getDespaIdPac/:identiPac'),
    __param(0, common_1.Param('identiPac')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "getDespaIdPac", null);
__decorate([
    common_1.Get('/getDespaDateNew/:date'),
    __param(0, common_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "getDespaDateNew", null);
__decorate([
    common_1.Get('/searchDespa/:idReceta'),
    __param(0, common_1.Param('idReceta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "searchDespa", null);
__decorate([
    common_1.Get('/searchDespaId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "searchDespaIdRece", null);
__decorate([
    common_1.Get('/searchDespaIdDespa/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "searchDespaId", null);
__decorate([
    common_1.Delete('/deleteDespa/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "deleteDespa", null);
__decorate([
    common_1.Post('/createCart'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "createCart", null);
__decorate([
    common_1.Get('/listCart/:idPac'),
    __param(0, common_1.Param('idPac')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "listCart", null);
__decorate([
    common_1.Delete('/deleteCart/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "deleteCart", null);
__decorate([
    common_1.Put('/updateDespa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [despacho_dto_1.DespachoDto]),
    __metadata("design:returntype", Promise)
], DespachoController.prototype, "updateTCat", null);
DespachoController = __decorate([
    common_1.Controller('despacho'),
    __metadata("design:paramtypes", [despacho_service_1.DespachoService])
], DespachoController);
exports.DespachoController = DespachoController;
//# sourceMappingURL=despacho.controller.js.map