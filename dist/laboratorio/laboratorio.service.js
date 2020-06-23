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
let LaboratorioService = class LaboratorioService {
};
LaboratorioService = __decorate([
    common_1.Injectable()
], LaboratorioService);
exports.LaboratorioService = LaboratorioService;
let CatalogoLabService = class CatalogoLabService {
    constructor(CatalogoLabModel) {
        this.CatalogoLabModel = CatalogoLabModel;
    }
    async createCatLab(createCatDto) {
        const createdCatLab = await new this.CatalogoLabModel(createCatDto).save();
        return createdCatLab;
    }
    async getCatLab() {
        const CatalogLab = await this.CatalogoLabModel.find();
        return CatalogLab;
    }
    async getCatLabId(id) {
        const getCatLabId = await this.CatalogoLabModel.findById(id);
        return getCatLabId;
    }
    async updateCatLab(id, editCaLabo) {
        const updateCatLab = await this.CatalogoLabModel.findByIdAndUpdate(id, editCaLabo, { new: true });
        return updateCatLab;
    }
    async deleteCatLab(id) {
        const deleteCatLab = await this.CatalogoLabModel.findByIdAndDelete(id);
        return deleteCatLab;
    }
    async deleteLogCatLab(id, editCa) {
        const updateCatLogLab = await this.CatalogoLabModel.findByIdAndUpdate(id, editCa, { new: true });
        return updateCatLogLab;
    }
    async listarCatLabDelete() {
        const listarCatLabDelete = await this.CatalogoLabModel.find({ estado: false });
        return listarCatLabDelete;
    }
};
CatalogoLabService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CAT_LAB_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CatalogoLabService);
exports.CatalogoLabService = CatalogoLabService;
let DetalleLabService = class DetalleLabService {
    constructor(DetalleLabModel) {
        this.DetalleLabModel = DetalleLabModel;
    }
    async createDetLab(createDetaDto) {
        const exist = await this.DetalleLabModel.find({ nombre: createDetaDto.nombre });
        if (exist.length === 0) {
            const createdDetLab = await new this.DetalleLabModel(createDetaDto).save();
            return createdDetLab;
        }
    }
    async getDetLab() {
        const DetalleLab = await this.DetalleLabModel.find();
        return DetalleLab;
    }
    async getDetLabId(id) {
        const getDetLabId = await this.DetalleLabModel.findById(id);
        return getDetLabId;
    }
    async updateDetLab(id, editDetLab) {
        const updateDetLab = await this.DetalleLabModel.findOneAndUpdate(id, editDetLab, { new: true });
        return updateDetLab;
    }
    async deleteDetLab(id) {
        const deleteDetLab = await this.DetalleLabModel.findByIdAndDelete(id);
        return deleteDetLab;
    }
    async deleteLogDetLab(id, editCa) {
        const updateDetLogLab = await this.DetalleLabModel.findOneAndUpdate(id, editCa, { new: true });
        return updateDetLogLab;
    }
    async listarDetLabDelete() {
        const listarDetLabDelete = await this.DetalleLabModel.find({ estado: false });
        return listarDetLabDelete;
    }
};
DetalleLabService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('DETA_LAB_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DetalleLabService);
exports.DetalleLabService = DetalleLabService;
let UnidadLabService = class UnidadLabService {
    constructor(UnidadLabModel) {
        this.UnidadLabModel = UnidadLabModel;
    }
    async createUniLab(createUniDto) {
        const exist = await this.UnidadLabModel.find({ nombre: createUniDto.nombre });
        if (exist.length === 0) {
            const createdUniLab = await new this.UnidadLabModel(createUniDto).save();
            return createdUniLab;
        }
    }
    async getUniLab() {
        const UnidadLab = await this.UnidadLabModel.find();
        return UnidadLab;
    }
    async getUniLabId(id) {
        const getUniLabId = await this.UnidadLabModel.findById(id);
        return getUniLabId;
    }
    async updateUniLab(id, editUniLab) {
        const updateUniLab = await this.UnidadLabModel.findOneAndUpdate(id, editUniLab, { new: true });
        return updateUniLab;
    }
    async deleteUniLab(id) {
        const deleteUniLab = await this.UnidadLabModel.findByIdAndDelete(id);
        return deleteUniLab;
    }
    async deleteLogUniLab(id, editUni) {
        const updateDetLogLab = await this.UnidadLabModel.findOneAndUpdate(id, editUni, { new: true });
        return updateDetLogLab;
    }
    async listarUniLabDelete() {
        const listarUniLabDelete = await this.UnidadLabModel.find({ estado: false });
        return listarUniLabDelete;
    }
};
UnidadLabService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('UNID_LAB_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UnidadLabService);
exports.UnidadLabService = UnidadLabService;
let CampoLabService = class CampoLabService {
    constructor(CampoLabModel) {
        this.CampoLabModel = CampoLabModel;
    }
    async createCamLab(createCamDto) {
        const exist = await this.CampoLabModel.find({ nombre: createCamDto.nombre });
        if (exist.length === 0) {
            const createdCamLab = await new this.CampoLabModel(createCamDto).save();
            return createdCamLab;
        }
    }
    async getCamLab() {
        const UnidadLab = await this.CampoLabModel.find().populate({ path: 'identiCatLabSchema' }).populate({ path: 'identiDetaLabSchema' }).populate({ path: 'identiUnidLabSchema' });
        return UnidadLab;
    }
    async getCamLabId(id) {
        const getCamLabId = await this.CampoLabModel.findById(id).populate({ path: 'identiCatLabSchema' }).populate({ path: 'identiDetaLabSchema' }).populate({ path: 'identiUnidLabSchema' });
        return getCamLabId;
    }
    async updateCamLab(id, editCamLab) {
        const updateCamLab = await this.CampoLabModel.findOneAndUpdate(id, editCamLab, { new: true });
        console.log(updateCamLab);
        return updateCamLab;
    }
    async deleteCamLab(id) {
        const deleteCamLab = await this.CampoLabModel.findByIdAndDelete(id);
        return deleteCamLab;
    }
    async deleteLogCamLab(id, editCam) {
        const updateCamLogLab = await this.CampoLabModel.findOneAndUpdate(id, editCam, { new: true });
        return updateCamLogLab;
    }
    async listarCamLabDelete() {
        const listarCamLabDelete = await this.CampoLabModel.find({ estado: false });
        return listarCamLabDelete;
    }
};
CampoLabService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CAMP_LAB_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CampoLabService);
exports.CampoLabService = CampoLabService;
let OrdenLabService = class OrdenLabService {
    constructor(OrdenLabModel) {
        this.OrdenLabModel = OrdenLabModel;
    }
    async createOrdLab(createOrdDto) {
        const createdOrdLab = await new this.OrdenLabModel(createOrdDto).save();
        return createdOrdLab;
    }
    async getOrdLab() {
        const UnidadLab = await this.OrdenLabModel.find().populate({ path: 'campos', populate: { path: 'identiCatLabSchema' } })
            .populate({ path: 'campos', populate: { path: 'identiDetaLabSchema' } }).populate({ path: 'campos', populate: { path: 'identiUnidLabSchema' } });
        return UnidadLab;
    }
    async getOrdLabId(id) {
        const getOrdLabId = await this.OrdenLabModel.findById(id);
        return getOrdLabId;
    }
    async updateOrdLab(id, editOrdLab) {
        const updateOrdLab = await this.OrdenLabModel.findByIdAndUpdate(id, editOrdLab, { new: true });
        return updateOrdLab;
    }
    async deleteOrdLab(id) {
        const deleteOrdLab = await this.OrdenLabModel.findByIdAndDelete(id);
        return deleteOrdLab;
    }
    async deleteLogOrdLab(id, editOrd) {
        const updateOrdLogLab = await this.OrdenLabModel.findByIdAndUpdate(id, editOrd, { new: true });
        return updateOrdLogLab;
    }
    async listarOrdLabDelete() {
        const listarOrdLabDelete = await this.OrdenLabModel.find({ estado: false });
        return listarOrdLabDelete;
    }
};
OrdenLabService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ORD_LAB_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], OrdenLabService);
exports.OrdenLabService = OrdenLabService;
//# sourceMappingURL=laboratorio.service.js.map