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
const receta_service_1 = require("./receta.service");
const receta_dto_1 = require("./dto/receta-dto");
let RecetaController = class RecetaController {
    constructor(recetasService) {
        this.recetasService = recetasService;
    }
    async createRece(createReceDto) {
        console.log(createReceDto);
        const createRece = await this.recetasService.createReceta(createReceDto);
        return createRece;
    }
    async getReceAll() {
        const recetas = await this.recetasService.getRecetas();
        return recetas;
    }
    async searchRece(id) {
        const receta = await this.recetasService.searchRece(id);
        return receta;
    }
    async searchReceId(id) {
        const receta = await this.recetasService.searchReceId(id);
        return receta;
    }
    async searchRecePac(id) {
        const receta = await this.recetasService.searchRecePac(id);
        return receta;
    }
    async searchRecePacMed(id) {
        const recetas = await this.recetasService.searchRecePacMed(id);
        return recetas;
    }
    async searchReceMed(id) {
        const recetas = await this.recetasService.searchReceMed(id);
        return recetas;
    }
    async deleteRece(id) {
        const deleteRece = this.recetasService.deleteReceta(id);
        return deleteRece;
    }
    async updateTCat(updateReceDto) {
        console.log('iddd', updateReceDto['id']);
        const tipoCatUpdate = await this.recetasService.updateReceta(updateReceDto['id'], updateReceDto);
        return tipoCatUpdate;
    }
    async getRecetaDateId(getReceDateId) {
        console.log(getReceDateId);
    }
    async listarDespaDate(date) {
        console.log('iddd', date);
        const despachos = await this.recetasService.searchReceDate(date);
        return despachos;
    }
};
__decorate([
    common_1.Post('/crearRece'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receta_dto_1.RecetaDto]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "createRece", null);
__decorate([
    common_1.Get('/listarRece'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "getReceAll", null);
__decorate([
    common_1.Get('/searchRece/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "searchRece", null);
__decorate([
    common_1.Get('/searchReceId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "searchReceId", null);
__decorate([
    common_1.Get('/searchRecePac/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "searchRecePac", null);
__decorate([
    common_1.Get('/searchRecePacMed/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "searchRecePacMed", null);
__decorate([
    common_1.Get('/searchReceMed/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "searchReceMed", null);
__decorate([
    common_1.Delete('/deleteRece/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "deleteRece", null);
__decorate([
    common_1.Put('/updateReceta'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receta_dto_1.RecetaDto]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "updateTCat", null);
__decorate([
    common_1.Get('/getRecetaDateId'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receta_dto_1.RecetaDto]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "getRecetaDateId", null);
__decorate([
    common_1.Get('/searchReceDate/:date'),
    __param(0, common_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "listarDespaDate", null);
RecetaController = __decorate([
    common_1.Controller('/receta'),
    __metadata("design:paramtypes", [receta_service_1.RecetaService])
], RecetaController);
exports.RecetaController = RecetaController;
//# sourceMappingURL=receta.controller.js.map