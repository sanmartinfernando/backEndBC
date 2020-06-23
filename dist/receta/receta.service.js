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
let RecetaService = class RecetaService {
    constructor(recetaModel) {
        this.recetaModel = recetaModel;
    }
    async createReceta(createReceDto) {
        const createRece = await new this.recetaModel(createReceDto).save();
        return createRece;
    }
    async getRecetas() {
        const recetas = await this.recetaModel.find();
        return recetas;
    }
    async searchRece(id) {
        const receta = await this.recetaModel.find({ codiRece: id });
        return receta[0];
    }
    async searchReceId(id) {
        const receta = await this.recetaModel.find({ _id: id });
        return receta[0];
    }
    async searchRecePac(id) {
        console.log(id);
        const receta = await this.recetaModel.find({ identiPac: id });
        return receta;
    }
    async searchRecePacMed(id) {
        var result = [];
        var ids = id.split(",");
        console.log(ids);
        var receta = await this.recetaModel.find({ $and: [{ identiPac: ids[0] }, { identiMed: ids[1] }] });
        return receta;
    }
    async searchReceMed(id) {
        console.log(id);
        var receta = await this.recetaModel.find({ identiMed: id });
        return receta;
    }
    async deleteReceta(id) {
        const deleteRece = await this.recetaModel.findByIdAndDelete(id);
        return deleteRece;
    }
    async updateReceta(id, editReceta) {
        const updateTCa = await this.recetaModel.findByIdAndUpdate(id, editReceta, { new: true });
        return updateTCa;
    }
    async searchReceDate(date) {
        var result = [];
        var ids = date.split(",");
        console.log(ids);
        const despa = await this.recetaModel.find({ $and: [{ fecha: ids[0] }, { identiPac: ids[1] }] });
        return despa;
    }
};
RecetaService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('RECE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RecetaService);
exports.RecetaService = RecetaService;
//# sourceMappingURL=receta.service.js.map