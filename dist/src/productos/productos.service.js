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
let ProductosService = class ProductosService {
    constructor(productosModel) {
        this.productosModel = productosModel;
    }
    async createProducto(createProdDto) {
        const createProd = await new this.productosModel(createProdDto).save();
        const producto = await this.productosModel.find({ nombre: createProdDto.nombre });
        return producto[0];
    }
    async getProductos() {
        const productos = await this.productosModel.find();
        return productos;
    }
    async deleteProdu(id) {
        const deleteCa = await this.productosModel.findByIdAndDelete(id);
        return deleteCa;
    }
    async viewInfoPro(id) {
        const infoPro = await this.productosModel.findById(id);
        return infoPro;
    }
    async updateProd(id, editPro) {
        const updateProd = await this.productosModel.findByIdAndUpdate(id, editPro, { new: true });
        return updateProd;
    }
    async deleteLogTCa(id, editPro) {
        const deleteLogTCa = await this.productosModel.findByIdAndUpdate(id, editPro, { new: true });
        return deleteLogTCa;
    }
};
ProductosService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PROD_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductosService);
exports.ProductosService = ProductosService;
//# sourceMappingURL=productos.service.js.map