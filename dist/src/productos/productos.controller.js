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
const productos_service_1 = require("./productos.service");
const productos_dto_1 = require("./dto/productos-dto");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let ProductosController = class ProductosController {
    constructor(productosService) {
        this.productosService = productosService;
    }
    async crearProdu(res, createProDto) {
        console.log('llego a crear');
        console.log(createProDto);
        for (let index = 0; index < createProDto.length; index++) {
            const createProdu = await this.productosService.createProducto(createProDto[index]);
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Item Successfully Created',
        });
        ;
    }
    async uploadFile(res, file, request) {
        const createProDto = {
            nombre: request['body']['nombre'],
            tipo: request['body']['tipo'],
            detalles: request['body']['detalles'],
            precio: request['body']['precio'],
            imageProd: request['file']['path']
        };
        const createProdu = await this.productosService.createProducto(createProDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Item Successfully Created',
        });
        ;
    }
    async getTCaAll() {
        const Productos = await this.productosService.getProductos();
        return Productos;
    }
    async deleteProdu(id) {
        const proDelete = this.productosService.deleteProdu(id);
        return proDelete;
    }
    async viewInfoPro(id) {
        const infoPro = await this.productosService.viewInfoPro(id);
        return infoPro;
    }
    async updateProd(updateProDto) {
        const updateProd = await this.productosService.updateProd(updateProDto['id'], updateProDto);
        return updateProd;
    }
    async deleteLogProd(deleteLogProDto) {
        const deleteLogProd = await this.productosService.deleteLogTCa(deleteLogProDto['id'], deleteLogProDto);
        return deleteLogProd;
    }
};
__decorate([
    common_1.Post('/crearProdu'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "crearProdu", null);
__decorate([
    common_1.Post('/upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads/',
            filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname); }
        })
    })),
    __param(0, common_1.Res()), __param(1, common_1.UploadedFile()), __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "uploadFile", null);
__decorate([
    common_1.Get('/listarProdu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "getTCaAll", null);
__decorate([
    common_1.Delete('/deleteProdu/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "deleteProdu", null);
__decorate([
    common_1.Get('/viewInfoPro/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "viewInfoPro", null);
__decorate([
    common_1.Put('/updateProd'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productos_dto_1.ProductosDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "updateProd", null);
__decorate([
    common_1.Put('/deleteLogProd'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productos_dto_1.ProductosDto]),
    __metadata("design:returntype", Promise)
], ProductosController.prototype, "deleteLogProd", null);
ProductosController = __decorate([
    common_1.Controller('productos'),
    __metadata("design:paramtypes", [productos_service_1.ProductosService])
], ProductosController);
exports.ProductosController = ProductosController;
//# sourceMappingURL=productos.controller.js.map