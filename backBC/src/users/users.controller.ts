import { Controller, Get, Query, Post, Body, Put,Patch, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import { UsersService, PersonaService, cityService } from './users.service';
import { UserDto, RoleDto } from './dto/users-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserInter } from './interfaces/users.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { log } from 'util';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  foto: any;

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/',
      filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname) }
    })
  }))
  async uploadFile(@Res() res, @UploadedFile() file, @Req() request: UserInter) {
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
    }
    createUser = await this.userService.createUser(createUserDto);
    console.log('createUser', createUser);
    if(createUser === undefined) {
      return res.status(HttpStatus.OK).json({
        data: 'vacio', 
        status: 'error',
      });
    } else {
      return res.status(HttpStatus.OK).json({
        data: createUser, 
        status: 'success',
      });
    }
  }

  @Post('/createUser')
  async createTCa(@Body() createUserDto: UserDto) {

    const createUser = await this.userService.createUser(createUserDto);
    return createUser;
  }

  @Get('/listarUser')
  async getTCaAll() {
    const listUser = await this.userService.getUser();
    return listUser;
  }

  @Delete('/deleteUser/:id')
  async deleteUser(@Param('id') id) {
    const deleteUser = this.userService.deleteUser(id);
    return deleteUser;
  }

  @Put('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/',
      filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname) }
    })
  }))
  async updateUser(@Res() res, @UploadedFile() file, @Req() request: UserInter) {
    let updUser: any;
    if (request['file'] === undefined) {
      this.foto = request['body']['fotoPerfil'];
    } else {
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
    }
    
    updUser = await this.userService.updateUser(request['body']['id'], updateUserDto);
    console.log(updUser);
    console.log(res.status);
    
    

    if (res.status(200)) {
     return  res.send({ data: updUser})
    } 
    if (res.status(500)) {
      return res.send("Por favor verifique la cedula, email, ")
    } 
    /*
    return res.status(HttpStatus.OK).json({
      data: updUser
    });*/
  }

  @Put('/updateStateDespa')
  async updateStateDespa(@Body() updateUserDto: UserDto) {
  
    const tipoCatUpdate = await this.userService.updateUser(updateUserDto['id'], updateUserDto);
    return tipoCatUpdate;
  } 


  //ROLES//
  @Post('/createRole')
  async createRole(@Body() createRoleDto: RoleDto) {
    const createRole = await this.userService.createRole(createRoleDto);
    return createRole;
  }

  @Get('/listarRoles')
  async listarRoles() {
    const listUser = await this.userService.listarRoles();
    return listUser;
  }

  @Put('/updateRol')
  async updateRol(@Body() updateRolDto: RoleDto) {

    const updateRol = await this.userService.updateRol(updateRolDto['id'], updateRolDto);
    return updateRol;
  }

  @Delete('/deleteRol/:id')
  async deleteRol(@Param('id') id) {
    const deleteRol = this.userService.deleteRol(id);
    return deleteRol;
  }


}

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }

  @Get('/getPersona/:cedula/:digito')
  async getTCaAll(@Param('cedula') cedula, @Param('digito') digito) {
    const listUser = await this.personaService.findOnePersona(cedula, digito);
    return listUser;
  }

}

@Controller('cities')
export class citiesController {
  constructor(private readonly cityService: cityService) { }

  @Get('/getCities')
  async getTCaAll() {
    const listUser = await this.cityService.getCities();
    return listUser;
  }

  @Post('/createCity')
  async createTCa(@Body() createUserDto: UserDto) {
    const createUser = await this.cityService.createCity(createUserDto);
    return createUser;
  }

}
