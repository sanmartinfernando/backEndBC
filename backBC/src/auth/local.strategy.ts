import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if(user == null){
      console.log('user null');
      return null; 
    }else 
      return user;
    /*
    if (!user) {
     console.log('contra erronea');
     
      throw new UnauthorizedException();
    }*/
    
  }
}