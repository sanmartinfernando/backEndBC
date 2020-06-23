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
const multer_1 = require("multer");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users-dto");
const platform_express_1 = require("@nestjs/platform-express");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async uploadFile(res, file, request) {
        let createUser;
        const createUserDto = {
            nombres: request['body']['nombres'],
            apellidos: request['body']['apellidos'],
            cedula: request['body']['cedula'],
            email: request['body']['email'],
            telefono: request['body']['telefono'],
            sexo: request['body']['sexo'],
            fotoPerfil: request['file']['path'],
            idFarmacia: request['body']['idFarmacia'],
            rol: request['body']['rol'],
            username: request['body']['username'],
            password: request['body']['password']
        };
        createUser = await this.userService.createUser(createUserDto);
        console.log('createUser', createUser);
        if (createUser === undefined) {
            return res.status(common_1.HttpStatus.OK).json({
                data: 'vacio',
                status: 'error',
            });
        }
        else {
            return res.status(common_1.HttpStatus.OK).json({
                data: createUser,
                status: 'success',
            });
        }
    }
    async createTCa(createUserDto) {
        const createUser = await this.userService.createUser(createUserDto);
        return createUser;
    }
    async getTCaAll() {
        const listUser = await this.userService.getUser();
        return listUser;
    }
    async deleteUser(id) {
        const deleteUser = this.userService.deleteUser(id);
        return deleteUser;
    }
    async updateUser(res, file, request) {
        let updUser;
        if (request['file'] === undefined) {
            this.foto = request['body']['fotoPerfil'];
        }
        else {
            this.foto = request['file']['path'];
        }
        const updateUserDto = {
            nombres: request['body']['nombres'],
            apellidos: request['body']['apellidos'],
            cedula: request['body']['cedula'],
            email: request['body']['email'],
            telefono: request['body']['telefono'],
            sexo: request['body']['sexo'],
            fotoPerfil: this.foto,
            idFarmacia: request['body']['idFarmacia'],
            rol: request['body']['rol'],
            username: request['body']['username'],
            password: request['body']['password']
        };
        updUser = await this.userService.updateUser(request['body']['id'], updateUserDto);
        console.log(updUser);
        console.log(res.status);
        if (res.status(200)) {
            return res.send({ data: updUser });
        }
        if (res.status(500)) {
            return res.send("Por favor verifique la cedula, email, ");
        }
    }
    async updateStateDespa(updateUserDto) {
        const tipoCatUpdate = await this.userService.updateUser(updateUserDto['id'], updateUserDto);
        return tipoCatUpdate;
    }
    async createRole(createRoleDto) {
        const createRole = await this.userService.createRole(createRoleDto);
        return createRole;
    }
    async listarRoles() {
        const listUser = await this.userService.listarRoles();
        return listUser;
    }
    async updateRol(updateRolDto) {
        const updateRol = await this.userService.updateRol(updateRolDto['id'], updateRolDto);
        return updateRol;
    }
    async deleteRol(id) {
        const deleteRol = this.userService.deleteRol(id);
        return deleteRol;
    }
};
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
], UsersController.prototype, "uploadFile", null);
__decorate([
    common_1.Post('/createUser'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createTCa", null);
__decorate([
    common_1.Get('/listarUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getTCaAll", null);
__decorate([
    common_1.Delete('/deleteUser/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    common_1.Put('/upload'),
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
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Put('/updateStateDespa'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateStateDespa", null);
__decorate([
    common_1.Post('/createRole'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.RoleDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createRole", null);
__decorate([
    common_1.Get('/listarRoles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "listarRoles", null);
__decorate([
    common_1.Put('/updateRol'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.RoleDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateRol", null);
__decorate([
    common_1.Delete('/deleteRol/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteRol", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
let PersonaController = class PersonaController {
    constructor(personaService) {
        this.personaService = personaService;
    }
    async getTCaAll(cedula, digito) {
        const listUser = await this.personaService.findOnePersona(cedula, digito);
        return listUser;
    }
};
__decorate([
    common_1.Get('/getPersona/:cedula/:digito'),
    __param(0, common_1.Param('cedula')), __param(1, common_1.Param('digito')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PersonaController.prototype, "getTCaAll", null);
PersonaController = __decorate([
    common_1.Controller('personas'),
    __metadata("design:paramtypes", [users_service_1.PersonaService])
], PersonaController);
exports.PersonaController = PersonaController;
let citiesController = class citiesController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    async getTCaAll() {
        const listUser = await this.cityService.getCities();
        return listUser;
    }
    async createTCa(createUserDto) {
        const createUser = await this.cityService.createCity(createUserDto);
        return createUser;
    }
};
__decorate([
    common_1.Get('/getCities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], citiesController.prototype, "getTCaAll", null);
__decorate([
    common_1.Post('/createCity'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], citiesController.prototype, "createTCa", null);
citiesController = __decorate([
    common_1.Controller('cities'),
    __metadata("design:paramtypes", [users_service_1.cityService])
], citiesController);
exports.citiesController = citiesController;
//# sourceMappingURL=users.controller.js.map