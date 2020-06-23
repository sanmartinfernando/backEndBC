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
let InventarioService = class InventarioService {
    constructor(inventarioModel) {
        this.inventarioModel = inventarioModel;
    }
    async createInventario(createInvDto) {
        const createdInv = await new this.inventarioModel(createInvDto).save();
        const inventario = await this.inventarioModel.find({ idProducto: createInvDto.idProducto });
        return inventario[0];
    }
    async getAllInventarios() {
        const inventarios = await this.inventarioModel.find().populate({ path: 'idProducto' }).populate({ path: 'idFarmacia' });
        return inventarios;
    }
    async getInveMed(id) {
        const tipoCatalogo = await this.inventarioModel.find({ idFarmacia: id }).populate({ path: 'idProducto' }).populate({ path: 'idFarmacia' });
        return tipoCatalogo;
    }
    async getInventarios(id) {
        var result = [];
        var ids = id.split(",");
        console.log(ids);
        for (let i = 0; i < id.length; i++) {
            if (ids[i] == undefined)
                break;
            var inventario = await this.inventarioModel.findById(ids[i]).populate({ path: 'idProducto' });
            result.push(inventario);
        }
        return result;
    }
    async deleteInventario(id) {
        const deleteInve = await this.inventarioModel.findByIdAndDelete(id);
        return deleteInve;
    }
};
InventarioService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('INVE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], InventarioService);
exports.InventarioService = InventarioService;
let FarmaciaService = class FarmaciaService {
    constructor(farmaciaModel) {
        this.farmaciaModel = farmaciaModel;
    }
    async createFarmacia(createFarDto) {
        const createdFarm = await new this.farmaciaModel(createFarDto).save();
        const farmCreat = await this.farmaciaModel.find({ nombre: createFarDto.nombre });
        return farmCreat[0];
    }
    async getFarmacias() {
        const farmacias = await this.farmaciaModel.find().populate({ path: 'parent' });
        return farmacias;
    }
    async listarFarmParent(id) {
        const farmacias = await this.farmaciaModel.find({ parent: id }).populate({ path: 'parent' });
        return farmacias;
    }
    async updateFarm(id, updateFarmDto) {
        const updateNotif = await this.farmaciaModel.findByIdAndUpdate(id, updateFarmDto, { new: true });
        const farm = await this.farmaciaModel.findById(id).populate({ path: 'parent' });
        return farm;
    }
    async deleteFarm(id) {
        const deleteFarm = await this.farmaciaModel.findByIdAndDelete(id);
        return deleteFarm;
    }
};
FarmaciaService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('FARM_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FarmaciaService);
exports.FarmaciaService = FarmaciaService;
//# sourceMappingURL=inventario.service.js.map