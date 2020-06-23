import { Model } from 'mongoose';
import { UserInter, PersonaInter, RoleInter, CitiesInter } from './interfaces/users.interface';
import { RoleDto } from './dto/users-dto';
export declare type User = any;
export declare class UsersService {
    private readonly userModel;
    private readonly roleModel;
    private readonly users;
    constructor(userModel: Model<UserInter>, roleModel: Model<RoleInter>);
    findOne(username: string): Promise<User | undefined>;
    createUser(createUserDto: any): Promise<UserInter[]>;
    getUser(): Promise<UserInter[]>;
    getUserId(id: any): Promise<UserInter>;
    updateUser(id: string, updateUserDto: any): Promise<UserInter>;
    deleteUser(id: string): Promise<any>;
    createRole(createRoleDto: RoleDto): Promise<RoleInter>;
    listarRoles(): Promise<RoleInter[]>;
    updateRol(id: string, updateRolDto: any): Promise<RoleInter>;
    deleteRol(id: string): Promise<any>;
}
export declare class PersonaService {
    private readonly personaModel;
    constructor(personaModel: Model<PersonaInter>);
    findOnePersona(cedula: string, digito: string): Promise<PersonaInter[]>;
}
export declare class cityService {
    private readonly dataModel;
    constructor(dataModel: Model<CitiesInter>);
    getCities(): Promise<any[]>;
    createCity(createUserDto: any): Promise<CitiesInter>;
}
