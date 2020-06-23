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
const laboratorio_service_1 = require("./laboratorio.service");
const laboratorio_dto_1 = require("./dto/laboratorio-dto");
let LaboratorioController = class LaboratorioController {
};
LaboratorioController = __decorate([
    common_1.Controller('laboratorio')
], LaboratorioController);
exports.LaboratorioController = LaboratorioController;
let CatalogoLabController = class CatalogoLabController {
    constructor(CatalogoLabService) {
        this.CatalogoLabService = CatalogoLabService;
    }
    async createCatLab(createCatLabDto) {
        const createCatLab = await this.CatalogoLabService.createCatLab(createCatLabDto);
        return createCatLab;
    }
    async getCatLab() {
        const getCatLab = await this.CatalogoLabService.getCatLab();
        return getCatLab;
    }
    async getCatLabId(id) {
        const getCatLabId = await this.CatalogoLabService.getCatLabId(id);
        return getCatLabId;
    }
    async updateCatLab(updateCatLabDto) {
        console.log(updateCatLabDto);
        const updateCatLab = await this.CatalogoLabService.updateCatLab(updateCatLabDto['id'], updateCatLabDto);
        return updateCatLab;
    }
    async deleteCatLab(id) {
        const deleteCatLab = this.CatalogoLabService.deleteCatLab(id);
        return deleteCatLab;
    }
    async deleteLogCa(updateCaLabDto) {
        console.log('iddd', updateCaLabDto['id']);
        const deleteLogCa = await this.CatalogoLabService.deleteLogCatLab(updateCaLabDto['id'], updateCaLabDto);
        return deleteLogCa;
    }
    async listarCatLabDelete() {
        const tipoCatalogos = await this.CatalogoLabService.listarCatLabDelete();
        return tipoCatalogos;
    }
};
__decorate([
    common_1.Post('/createCatLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.catLabDto]),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "createCatLab", null);
__decorate([
    common_1.Get('/getCatLab'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "getCatLab", null);
__decorate([
    common_1.Get('/getCatLabId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "getCatLabId", null);
__decorate([
    common_1.Put('/updateCatLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.catLabDto]),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "updateCatLab", null);
__decorate([
    common_1.Delete('/deleteCatLab/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "deleteCatLab", null);
__decorate([
    common_1.Put('/deleteLogCatLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.catLabDto]),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "deleteLogCa", null);
__decorate([
    common_1.Get('/listarCatLabDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatalogoLabController.prototype, "listarCatLabDelete", null);
CatalogoLabController = __decorate([
    common_1.Controller('categoriaLab'),
    __metadata("design:paramtypes", [laboratorio_service_1.CatalogoLabService])
], CatalogoLabController);
exports.CatalogoLabController = CatalogoLabController;
let DetalleLabController = class DetalleLabController {
    constructor(DetalleLabService) {
        this.DetalleLabService = DetalleLabService;
    }
    async createDetLab(res, createDetLabDto) {
        const createDetLab = await this.DetalleLabService.createDetLab(createDetLabDto);
        if (createDetLab === undefined) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Item is exist',
            });
        }
        return createDetLab;
    }
    async getDetLab() {
        const getDetLab = await this.DetalleLabService.getDetLab();
        return getDetLab;
    }
    async getDetLabId(id) {
        const getDetLabId = await this.DetalleLabService.getDetLabId(id);
        return getDetLabId;
    }
    async updateDetLab(updateDetLabDto) {
        const updateDetLab = await this.DetalleLabService.updateDetLab(updateDetLabDto['id'], updateDetLabDto);
        return updateDetLab;
    }
    async deleteDetLab(id) {
        const deleteDetLab = this.DetalleLabService.deleteDetLab(id);
        return deleteDetLab;
    }
    async deleteLogDet(updateDetLabDto) {
        const deleteLogCa = await this.DetalleLabService.deleteLogDetLab(updateDetLabDto['id'], updateDetLabDto);
        return deleteLogCa;
    }
    async listarDetLabDelete() {
        const tipoCatalogos = await this.DetalleLabService.listarDetLabDelete();
        return tipoCatalogos;
    }
};
__decorate([
    common_1.Post('/createDetLab'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, laboratorio_dto_1.detaLabDto]),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "createDetLab", null);
__decorate([
    common_1.Get('/getDetLab'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "getDetLab", null);
__decorate([
    common_1.Get('/getDetLabId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "getDetLabId", null);
__decorate([
    common_1.Put('/updateDetLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.detaLabDto]),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "updateDetLab", null);
__decorate([
    common_1.Delete('/deleteDetLab/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "deleteDetLab", null);
__decorate([
    common_1.Put('/deleteLogDetLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.detaLabDto]),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "deleteLogDet", null);
__decorate([
    common_1.Get('/listarDetLabDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DetalleLabController.prototype, "listarDetLabDelete", null);
DetalleLabController = __decorate([
    common_1.Controller('detalleLab'),
    __metadata("design:paramtypes", [laboratorio_service_1.DetalleLabService])
], DetalleLabController);
exports.DetalleLabController = DetalleLabController;
let UnidadLabController = class UnidadLabController {
    constructor(UnidadLabService) {
        this.UnidadLabService = UnidadLabService;
    }
    async createUniLab(res, createUniLabDto) {
        const createUniLab = await this.UnidadLabService.createUniLab(createUniLabDto);
        if (createUniLab === undefined) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Item is exist',
            });
        }
        return createUniLab;
    }
    async getUniLab() {
        const getDetLab = await this.UnidadLabService.getUniLab();
        return getDetLab;
    }
    async getUniLabId(id) {
        const getUniLabId = await this.UnidadLabService.getUniLabId(id);
        return getUniLabId;
    }
    async updateUniLab(updateUniLabDto) {
        const updateUniLab = await this.UnidadLabService.updateUniLab(updateUniLabDto['id'], updateUniLabDto);
        return updateUniLab;
    }
    async deleteUniLab(id) {
        const deleteUniLab = this.UnidadLabService.deleteUniLab(id);
        return deleteUniLab;
    }
    async deleteLogUni(updateUniLabDto) {
        const deleteLogUni = await this.UnidadLabService.deleteLogUniLab(updateUniLabDto['id'], updateUniLabDto);
        return deleteLogUni;
    }
    async listarUniLabDelete() {
        const tipoCatalogos = await this.UnidadLabService.listarUniLabDelete();
        return tipoCatalogos;
    }
};
__decorate([
    common_1.Post('/createUniLab'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, laboratorio_dto_1.unidLabDto]),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "createUniLab", null);
__decorate([
    common_1.Get('/getUniLab'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "getUniLab", null);
__decorate([
    common_1.Get('/getUniLabId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "getUniLabId", null);
__decorate([
    common_1.Put('/updateUniLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.unidLabDto]),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "updateUniLab", null);
__decorate([
    common_1.Delete('/deleteUniLab/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "deleteUniLab", null);
__decorate([
    common_1.Put('/deleteLogUniLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.unidLabDto]),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "deleteLogUni", null);
__decorate([
    common_1.Get('/listarUniLabDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadLabController.prototype, "listarUniLabDelete", null);
UnidadLabController = __decorate([
    common_1.Controller('unidadLab'),
    __metadata("design:paramtypes", [laboratorio_service_1.UnidadLabService])
], UnidadLabController);
exports.UnidadLabController = UnidadLabController;
let CampoLabController = class CampoLabController {
    constructor(CampoLabService) {
        this.CampoLabService = CampoLabService;
    }
    async createCamLab(res, createCamLabDto) {
        const createCamLab = await this.CampoLabService.createCamLab(createCamLabDto);
        if (createCamLab === undefined) {
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Item is exist',
            });
        }
        return createCamLab;
    }
    async getCamLab() {
        const getCamLab = await this.CampoLabService.getCamLab();
        return getCamLab;
    }
    async getCamLabId(id) {
        const getCamLabId = await this.CampoLabService.getCamLabId(id);
        return getCamLabId;
    }
    async updateCamLab(updateCamLabDto) {
        const updateCamLab = await this.CampoLabService.updateCamLab(updateCamLabDto['id'], updateCamLabDto);
        return updateCamLab;
    }
    async deleteCamLab(id) {
        const deleteCamLab = this.CampoLabService.deleteCamLab(id);
        return deleteCamLab;
    }
    async deleteLogCam(updateCamLabDto) {
        const deleteLogCam = await this.CampoLabService.deleteLogCamLab(updateCamLabDto['id'], updateCamLabDto);
        return deleteLogCam;
    }
    async listarCamLabDelete() {
        const tipoCatalogos = await this.CampoLabService.listarCamLabDelete();
        return tipoCatalogos;
    }
};
__decorate([
    common_1.Post('/createCamLab'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, laboratorio_dto_1.camposLabDto]),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "createCamLab", null);
__decorate([
    common_1.Get('/getCamLab'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "getCamLab", null);
__decorate([
    common_1.Get('/getCamLabId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "getCamLabId", null);
__decorate([
    common_1.Put('/updateCamLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.camposLabDto]),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "updateCamLab", null);
__decorate([
    common_1.Delete('/deleteUniLab/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "deleteCamLab", null);
__decorate([
    common_1.Put('/deleteLogCamLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.camposLabDto]),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "deleteLogCam", null);
__decorate([
    common_1.Get('/listarCamLabDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampoLabController.prototype, "listarCamLabDelete", null);
CampoLabController = __decorate([
    common_1.Controller('campoLab'),
    __metadata("design:paramtypes", [laboratorio_service_1.CampoLabService])
], CampoLabController);
exports.CampoLabController = CampoLabController;
let OrdenLabController = class OrdenLabController {
    constructor(OrdenLabService) {
        this.OrdenLabService = OrdenLabService;
    }
    async createOrdLab(createOrdLabDto) {
        const createOrdLab = await this.OrdenLabService.createOrdLab(createOrdLabDto);
        return createOrdLab;
    }
    async getordLab() {
        const getOrdLab = await this.OrdenLabService.getOrdLab();
        return getOrdLab;
    }
    async getOrdLabId(id) {
        const getOrdLabId = await this.OrdenLabService.getOrdLabId(id);
        return getOrdLabId;
    }
    async updateCamLab(updateOrdLabDto) {
        const updateOrdLab = await this.OrdenLabService.updateOrdLab(updateOrdLabDto['id'], updateOrdLabDto);
        return updateOrdLab;
    }
    async deleteOrdLab(id) {
        const deleteOrdLab = this.OrdenLabService.deleteOrdLab(id);
        return deleteOrdLab;
    }
    async deleteLogOrd(updateOrdLabDto) {
        const deleteLogOrd = await this.OrdenLabService.deleteLogOrdLab(updateOrdLabDto['id'], updateOrdLabDto);
        return deleteLogOrd;
    }
    async listarOrdLabDelete() {
        const tipoCatalogos = await this.OrdenLabService.listarOrdLabDelete();
        return tipoCatalogos;
    }
};
__decorate([
    common_1.Post('/createOrdLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.ordenLabDto]),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "createOrdLab", null);
__decorate([
    common_1.Get('/getOrdLab'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "getordLab", null);
__decorate([
    common_1.Get('/getOrdLabId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "getOrdLabId", null);
__decorate([
    common_1.Put('/updateCamLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.ordenLabDto]),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "updateCamLab", null);
__decorate([
    common_1.Delete('/deleteOrdLab/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "deleteOrdLab", null);
__decorate([
    common_1.Put('/deleteLogOrdLab'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laboratorio_dto_1.ordenLabDto]),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "deleteLogOrd", null);
__decorate([
    common_1.Get('/listarOrdLabDelete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdenLabController.prototype, "listarOrdLabDelete", null);
OrdenLabController = __decorate([
    common_1.Controller('ordenLab'),
    __metadata("design:paramtypes", [laboratorio_service_1.OrdenLabService])
], OrdenLabController);
exports.OrdenLabController = OrdenLabController;
//# sourceMappingURL=laboratorio.controller.js.map