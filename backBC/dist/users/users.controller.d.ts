import { UsersService, PersonaService, cityService } from './users.service';
import { UserDto, RoleDto } from './dto/users-dto';
import { UserInter } from './interfaces/users.interface';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    foto: any;
    uploadFile(res: any, file: any, request: UserInter): Promise<any>;
    createTCa(createUserDto: UserDto): Promise<UserInter[]>;
    getTCaAll(): Promise<UserInter[]>;
    deleteUser(id: any): Promise<any>;
    updateUser(res: any, file: any, request: UserInter): Promise<any>;
    updateStateDespa(updateUserDto: UserDto): Promise<UserInter>;
    createRole(createRoleDto: RoleDto): Promise<import("./interfaces/users.interface").RoleInter>;
    listarRoles(): Promise<import("./interfaces/users.interface").RoleInter[]>;
    updateRol(updateRolDto: RoleDto): Promise<import("./interfaces/users.interface").RoleInter>;
    deleteRol(id: any): Promise<any>;
}
export declare class PersonaController {
    private readonly personaService;
    constructor(personaService: PersonaService);
    getTCaAll(cedula: any, digito: any): Promise<import("./interfaces/users.interface").PersonaInter[]>;
}
export declare class citiesController {
    private readonly cityService;
    constructor(cityService: cityService);
    getTCaAll(): Promise<any[]>;
    createTCa(createUserDto: UserDto): Promise<import("./interfaces/users.interface").CitiesInter>;
}
