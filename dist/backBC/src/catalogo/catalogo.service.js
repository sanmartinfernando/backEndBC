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
let TipoCatalogoService = class TipoCatalogoService {
    constructor(tipoCatalogoModel) {
        this.tipoCatalogoModel = tipoCatalogoModel;
    }
    async createTipoCatalogo(createTCatDto) {
        const createdTCa = await new this.tipoCatalogoModel(createTCatDto).save();
        const tipoCatalogo = await this.tipoCatalogoModel.find({ nombre: createTCatDto.nombre });
        return tipoCatalogo[0];
    }
    async getTipoCatalogos() {
        const tipoCatalogos = await this.tipoCatalogoModel.find();
        return tipoCatalogos;
    }
    async listarTCaDelete() {
        const tipoCatalogos = await this.tipoCatalogoModel.find({ estado: false });
        return tipoCatalogos;
    }
    async getTipoCatalogo(id) {
        const tipoCatalogo = await this.tipoCatalogoModel.findById(id);
        return tipoCatalogo;
    }
    async updateTCa(id, editTCa) {
        const updateTCa = await this.tipoCatalogoModel.findByIdAndUpdate(id, editTCa, { new: true });
        return updateTCa;
    }
    async deleteLogTCa(id, editTCa) {
        const updateTCa = await this.tipoCatalogoModel.findByIdAndUpdate(id, editTCa, { new: true });
        return updateTCa;
    }
    async deleteTCa(id) {
        const deleteTCa = await this.tipoCatalogoModel.findByIdAndDelete(id);
        return deleteTCa;
    }
};
TipoCatalogoService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('TIPO_CAT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TipoCatalogoService);
exports.TipoCatalogoService = TipoCatalogoService;
let CatalogoService = class CatalogoService {
    constructor(CatalogoModel) {
        this.CatalogoModel = CatalogoModel;
    }
    async createCatalogo(createCatDto) {
        const createdCa = await new this.CatalogoModel(createCatDto).save();
        const catalogoCreate = await this.CatalogoModel.find({ nombre: createCatDto.nombre });
        return catalogoCreate[0];
    }
    async getCatalogos() {
        const Catalogos = await this.CatalogoModel.find();
        return Catalogos;
    }
    async deleteCa(id) {
        const deleteCa = await this.CatalogoModel.findByIdAndDelete(id);
        return deleteCa;
    }
    async updateCa(id, editCa) {
        const updateCa = await this.CatalogoModel.findOneAndUpdate(id, editCa, { new: true });
        return updateCa;
    }
    async deleteLogCa(id, editCa) {
        const updateCa = await this.CatalogoModel.findOneAndUpdate(id, editCa, { new: true });
        return updateCa;
    }
    async listarCaDelete() {
        const catalogos = await this.CatalogoModel.find({ estado: false });
        return catalogos;
    }
};
CatalogoService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CAT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CatalogoService);
exports.CatalogoService = CatalogoService;
//# sourceMappingURL=catalogo.service.js.map