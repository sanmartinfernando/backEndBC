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
let DespachoService = class DespachoService {
    constructor(despachoModel, carritoM) {
        this.despachoModel = despachoModel;
        this.carritoM = carritoM;
    }
    async createDespa(createDespa) {
        const createDesp = await new this.despachoModel(createDespa).save();
        console.log('createDesp', createDesp);
        const producto = await this.despachoModel.find({ _id: createDesp._id }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return producto[0];
    }
    async getDespa() {
        const despacho = await this.despachoModel.find().populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despacho;
    }
    async getDespaDate(date) {
        const despa = await this.despachoModel.find({ fecha: { $regex: date } }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despa;
    }
    async getDespaDateNew(date) {
        const despa = await this.despachoModel.find({ $and: [{ fecha: date }, { estadoDespacho: 'nuevo' }] }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despa;
    }
    async getDespaDateIdPac(identiPac) {
        const despa = await this.despachoModel.find({ identiPac: identiPac }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despa;
    }
    async searchDespa(idReceta) {
        const despa = await this.despachoModel.find({ idReceta: idReceta }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despa;
    }
    async searchDespaIdRece(id) {
        const despa = await this.despachoModel.find({ datosReceta: id }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despa;
    }
    async searchDespaIdDespa(id) {
        const despa = await this.despachoModel.find({ _id: id }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return despa;
    }
    async deleteDespa(id) {
        const deleteDespa = await this.despachoModel.findByIdAndDelete(id);
        return deleteDespa;
    }
    async updateDespa(id, editDepa) {
        const updateDes = await this.despachoModel.findByIdAndUpdate(id, editDepa, { new: true });
        const tipoCatalogo = await this.despachoModel.find({ _id: id }).populate({ path: 'idTransportista' }).populate({ path: 'datosReceta' });
        return tipoCatalogo[0];
    }
    async createCart(data) {
        const despa = await this.carritoM.find({ identiPac: data.identiPac });
        if (despa.length != 0) {
            const deleteDespa = await this.carritoM.findByIdAndDelete(despa[0]['_id']);
            const createProd = await new this.carritoM(data).save();
        }
        else {
            const createProd = await new this.carritoM(data).save();
        }
    }
    async listCart(idPac) {
        const cartList = await this.carritoM.find({ identiPac: idPac });
        return cartList;
    }
    async deleteCart(id) {
        const deleteDespa = await this.carritoM.findOneAndDelete({ identiPac: id });
        return deleteDespa;
    }
};
DespachoService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('DESP_MODEL')),
    __param(1, common_1.Inject('CARRI_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], DespachoService);
exports.DespachoService = DespachoService;
//# sourceMappingURL=despacho.service.js.map