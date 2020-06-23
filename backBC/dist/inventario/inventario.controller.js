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
const inventario_service_1 = require("./inventario.service");
const inventario_dto_1 = require("./dto/inventario-dto");
let InventarioController = class InventarioController {
    constructor(inventarioService) {
        this.inventarioService = inventarioService;
    }
    async createInve(createInveDto) {
        console.log('createInveDto', createInveDto);
        const createInve = await this.inventarioService.createInventario(createInveDto);
        return createInve;
    }
    async getInveAll() {
        const inventarios = await this.inventarioService.getAllInventarios();
        return inventarios;
    }
    async getInventarios(id) {
        const inventarios = await this.inventarioService.getInventarios(id);
        return inventarios;
    }
    async getInveMed(id) {
        const inventarios = await this.inventarioService.getInveMed(id);
        return inventarios;
    }
    async deleteInve(id) {
        const deleteInve = this.inventarioService.deleteInventario(id);
        return deleteInve;
    }
};
__decorate([
    common_1.Post('/crearInve'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventario_dto_1.InventarioDto]),
    __metadata("design:returntype", Promise)
], InventarioController.prototype, "createInve", null);
__decorate([
    common_1.Get('/listarInveAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InventarioController.prototype, "getInveAll", null);
__decorate([
    common_1.Get('/listarInventarios/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventarioController.prototype, "getInventarios", null);
__decorate([
    common_1.Get('/getInveMed/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InventarioController.prototype, "getInveMed", null);
__decorate([
    common_1.Delete('/deleteInve/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventarioController.prototype, "deleteInve", null);
InventarioController = __decorate([
    common_1.Controller('inventario'),
    __metadata("design:paramtypes", [inventario_service_1.InventarioService])
], InventarioController);
exports.InventarioController = InventarioController;
let FarmController = class FarmController {
    constructor(farmaciaService) {
        this.farmaciaService = farmaciaService;
    }
    async createFarm(createFarmDto) {
        console.log(createFarmDto);
        const createFarm = await this.farmaciaService.createFarmacia(createFarmDto);
        return createFarm;
    }
    async getFarmAll() {
        const farmacias = await this.farmaciaService.getFarmacias();
        return farmacias;
    }
    async listarFarmParent(id) {
        const farmacias = await this.farmaciaService.listarFarmParent(id);
        return farmacias;
    }
    async updateFarm(updateFarmDto) {
        const updateFarm = await this.farmaciaService.updateFarm(updateFarmDto['id'], updateFarmDto);
        return updateFarm;
    }
    async deleteFarm(id) {
        const deleteFarm = this.farmaciaService.deleteFarm(id);
        return deleteFarm;
    }
};
__decorate([
    common_1.Post('/crearFarm'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventario_dto_1.FarmaciaDto]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "createFarm", null);
__decorate([
    common_1.Get('/listarFarm'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "getFarmAll", null);
__decorate([
    common_1.Get('/listarFarmParent/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "listarFarmParent", null);
__decorate([
    common_1.Put('/updateFarm'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventario_dto_1.FarmaciaDto]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "updateFarm", null);
__decorate([
    common_1.Delete('/deleteFarm/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "deleteFarm", null);
FarmController = __decorate([
    common_1.Controller('farmacia'),
    __metadata("design:paramtypes", [inventario_service_1.FarmaciaService])
], FarmController);
exports.FarmController = FarmController;
//# sourceMappingURL=inventario.controller.js.map