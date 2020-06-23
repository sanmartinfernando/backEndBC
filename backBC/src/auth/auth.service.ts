import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('validate', user);
    console.log('validate', user.length);

    if(user.length == 0){
      console.log('0');
      return null;

    }else {
      console.log('1');
      if (user && user[0]['password'] === pass) {
        const { password, ...result } = user;
        return result;
      } 
    }
     
   
    
  }
  async login(user: any) {
    const payload = {
      username: user[0].username,
      nombre: user[0].nombre,
      id: user[0]._id,
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}