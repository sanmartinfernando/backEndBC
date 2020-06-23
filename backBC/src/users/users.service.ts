import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserInter, PersonaInter, RoleInter, CitiesInter } from './interfaces/users.interface';
import { UserDto, Personas, RoleDto } from './dto/users-dto';
import { log } from 'util';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@Inject('USER_MODEL') private readonly userModel: Model<UserInter>,
  @Inject('ROLE_MODEL') private readonly roleModel: Model<RoleInter>) {
  
 } 

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userModel.find({username: username});
    return user;
  } 


  async createUser(createUserDto: any): Promise<UserInter[]> {
    let user = undefined;
    const userVer  = await this.userModel.find({ $or: [ { username: createUserDto.username }, { cedula: createUserDto.cedula },  { email: createUserDto.email }, { password: createUserDto.password }] });
    console.log(' userVer',userVer);
    if (userVer.length === 0) {
      console.log('no hay');
      const createdCa =  await new this.userModel(createUserDto).save();
      user  = await this.userModel.find({_id: createdCa._id}).populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
      return user;
      
    } else {
       
      console.log(' hay',);
      return user;
    }
    

   
  }
  async getUser(): Promise<UserInter[]> { 
    const listUser =  await this.userModel.find().populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
    return listUser;
  }
  async getUserId(id: any): Promise<UserInter> {
    const userLogin  = await this.userModel.findById(id).populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
    return userLogin;
  }

  async updateUser(id: string, updateUserDto: any,): Promise<UserInter> {
    const updateNotif = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new : true});
    const user  = await this.userModel.findById(id).populate({ path: 'rol' }).populate({ path: 'idFarmacia' });
    return user;
  }



  async deleteUser(id: string): Promise<any> {
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    return deleteUser;
   
  } 


  //ROLES//
  async createRole(createRoleDto: RoleDto): Promise<RoleInter> {
    const createdCa =  await new this.roleModel(createRoleDto).save();
    const roleCreate = await this.roleModel.find({nombre:createRoleDto.nombre})
    return roleCreate[0];
  }
  async listarRoles(): Promise<RoleInter[]> {
    const listarRoles =  await this.roleModel.find();
    return listarRoles;
  }
  
  async updateRol(id: string, updateRolDto: any,): Promise<RoleInter> {
    const updateNotif = await this.roleModel.findByIdAndUpdate(id, updateRolDto, {new : true});
    const rol  = await this.roleModel.findById(id);
    return rol;
  }


  async deleteRol(id: string): Promise<any> {
    const deleteRol = await this.roleModel.findByIdAndDelete(id);
    return deleteRol;

  }

}  


@Injectable()
export class PersonaService {

  constructor(@Inject('PERSON_MODEL') private readonly personaModel: Model<PersonaInter>) {}
  

  async findOnePersona(cedula: string, digito: string): Promise<PersonaInter[]> {
    console.log(cedula, digito);
    
    const user = await this.personaModel.find({$and: [{cedula:cedula}, {digito:digito}] });
 
    return user;
  }

  }


  @Injectable()
  export class cityService {
  
    constructor(@Inject('DATA_ECUA_MODEL') private readonly dataModel: Model<CitiesInter>) {}
    
    async getCities(): Promise<any[]> { 
      const listDataEc =  await this.dataModel.find();
      return listDataEc;
    }

    async createCity(createUserDto: any): Promise<CitiesInter> {
      const createdCa =  await new this.dataModel(createUserDto).save();
     return createdCa[0];
    }
    
    
  
  }