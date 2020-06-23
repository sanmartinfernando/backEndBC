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
let UsersService = class UsersService {
    constructor(userModel, roleModel) {
        this.userModel = userModel;
        this.roleModel = roleModel;
    }
    async findOne(username) {
        const user = await this.userModel.find({ username: username });
        return user;
    }
    async createUser(createUserDto) {
        let user = undefined;
        const userVer = await this.userModel.find({ $or: [{ username: createUserDto.username }, { cedula: createUserDto.cedula }, { email: createUserDto.email }, { password: createUserDto.password }] });
        console.log(' userVer', userVer);
        if (userVer.length === 0) {
            console.log('no hay');
            const createdCa = await new this.userModel(createUserDto).save();
            user = await this.userModel.find({ _id: createdCa._id }).populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
            return user;
        }
        else {
            console.log(' hay');
            return user;
        }
    }
    async getUser() {
        const listUser = await this.userModel.find().populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
        return listUser;
    }
    async getUserId(id) {
        const userLogin = await this.userModel.findById(id).populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
        return userLogin;
    }
    async updateUser(id, updateUserDto) {
        const updateNotif = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
        const user = await this.userModel.findById(id).populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
        return user;
    }
    async deleteUser(id) {
        const deleteUser = await this.userModel.findByIdAndDelete(id);
        return deleteUser;
    }
    async createRole(createRoleDto) {
        const createdCa = await new this.roleModel(createRoleDto).save();
        const roleCreate = await this.roleModel.find({ nombre: createRoleDto.nombre });
        return roleCreate[0];
    }
    async listarRoles() {
        const listarRoles = await this.roleModel.find();
        return listarRoles;
    }
    async updateRol(id, updateRolDto) {
        const updateNotif = await this.roleModel.findByIdAndUpdate(id, updateRolDto, { new: true });
        const rol = await this.roleModel.findById(id);
        return rol;
    }
    async deleteRol(id) {
        const deleteRol = await this.roleModel.findByIdAndDelete(id);
        return deleteRol;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('USER_MODEL')),
    __param(1, common_1.Inject('ROLE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
let PersonaService = class PersonaService {
    constructor(personaModel) {
        this.personaModel = personaModel;
    }
    async findOnePersona(cedula, digito) {
        console.log(cedula, digito);
        const user = await this.personaModel.find({ $and: [{ cedula: cedula }, { digito: digito }] });
        return user;
    }
};
PersonaService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PERSON_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PersonaService);
exports.PersonaService = PersonaService;
let cityService = class cityService {
    constructor(dataModel) {
        this.dataModel = dataModel;
    }
    async getCities() {
        const listDataEc = await this.dataModel.find();
        return listDataEc;
    }
    async createCity(createUserDto) {
        const createdCa = await new this.dataModel(createUserDto).save();
        return createdCa[0];
    }
};
cityService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('DATA_ECUA_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], cityService);
exports.cityService = cityService;
//# sourceMappingURL=users.service.js.map