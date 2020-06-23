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
const catalogo_service_1 = require("./catalogo.service");
const catalogo_dto_1 = require("./dto/catalogo-dto");
let TipoCatalogoController = class TipoCatalogoController {
    constructor(TipoCatalogoService) {
        this.TipoCatalogoService = TipoCatalogoService;
    }
    async createTCa(createTCaDto) {
        console.log(createTCaDto);
        const createTCat = await this.TipoCatalogoService.createTipoCatalogo(createTCaDto);
        return createTCat;
    }
    async getTCaAll() {
        const tipoCatalogos = await this.TipoCatalogoService.getTipoCatalogos();
        return tipoCatalogos;
    }
    async listarTCaDelete() {
        const tipoCatalogos = await this.TipoCatalogoService.listarTCaDelete();
        return tipoCatalogos;
    }
    async getTipoCatalogo(id) {
        console.log('iddd', id);
        const tipoCatalogo = await this.TipoCatalogoService.getTipoCatalogo(id);
        return tipoCatalogo;
    }
    async updateTCat(updateCatDto) {
        console.log('iddd', updateCatDto['id']);
        const tipoCatUpdate = await this.TipoCatalogoService.updateTCa(updateCatDto['id'], updateCatDto);
        return tipoCatUpdate;
    }
    async deleteLogCa(updateCaDto) {
        console.log('iddd', updateCaDto['id']);
        const tipoCatUpdate = await this.TipoCatalogoService.deleteLogTCa(updateCaDto['id'], updateCaDto);
        return tipoCatUpdate;
    }
    async deleteTCa(id) {
        const tipoCatDelete = this.TipoCatalogoService.deleteTCa(id);
        return tipoCatDelete;
    }
};
__decorate([
    common_1.Post('/crearTCa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_dto_1.TipoCatalogoDto]),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "createTCa", null);
__decorate([
    common_1.Get('/listarTCa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "getTCaAll", null);
__decorate([
    common_1.Get('/listarTCaDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "listarTCaDelete", null);
__decorate([
    common_1.Get('/listarTCa/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "getTipoCatalogo", null);
__decorate([
    common_1.Put('/updateTCa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_dto_1.TipoCatalogoDto]),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "updateTCat", null);
__decorate([
    common_1.Put('/deleteLogTCa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_dto_1.TipoCatalogoDto]),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "deleteLogCa", null);
__decorate([
    common_1.Delete('/deleteTCat/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipoCatalogoController.prototype, "deleteTCa", null);
TipoCatalogoController = __decorate([
    common_1.Controller('tipocatalogo'),
    __metadata("design:paramtypes", [catalogo_service_1.TipoCatalogoService])
], TipoCatalogoController);
exports.TipoCatalogoController = TipoCatalogoController;
let CatalogoController = class CatalogoController {
    constructor(CatalogoService) {
        this.CatalogoService = CatalogoService;
    }
    async createTCa(createCaDto) {
        console.log(createCaDto);
        const createCat = await this.CatalogoService.createCatalogo(createCaDto);
        return createCat;
    }
    async getTCaAll() {
        const Catalogos = await this.CatalogoService.getCatalogos();
        return Catalogos;
    }
    async deleteCa(id) {
        const CatDelete = this.CatalogoService.deleteCa(id);
        return CatDelete;
    }
    async updateCa(updateCaDto) {
        console.log('iddd', updateCaDto['id']);
        const tipoCatUpdate = await this.CatalogoService.updateCa(updateCaDto['id'], updateCaDto);
        return tipoCatUpdate;
    }
    async deleteLogCa(updateCaDto) {
        console.log('iddd', updateCaDto['id']);
        const tipoCatUpdate = await this.CatalogoService.deleteLogCa(updateCaDto['id'], updateCaDto);
        return tipoCatUpdate;
    }
    async listarTCaDelete() {
        const catalogos = await this.CatalogoService.listarCaDelete();
        return catalogos;
    }
};
__decorate([
    common_1.Post('/crearCa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_dto_1.CatalogoDto]),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "createTCa", null);
__decorate([
    common_1.Get('/listarCa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "getTCaAll", null);
__decorate([
    common_1.Delete('/deleteCa/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "deleteCa", null);
__decorate([
    common_1.Put('/updateCa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_dto_1.CatalogoDto]),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "updateCa", null);
__decorate([
    common_1.Put('/deleteLogCa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [catalogo_dto_1.CatalogoDto]),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "deleteLogCa", null);
__decorate([
    common_1.Get('/listarCaDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "listarTCaDelete", null);
CatalogoController = __decorate([
    common_1.Controller('catalogo'),
    __metadata("design:paramtypes", [catalogo_service_1.CatalogoService])
], CatalogoController);
exports.CatalogoController = CatalogoController;
//# sourceMappingURL=catalogo.controller.js.map