import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {


    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneByUserEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    
    async signIn(email: string,password: string,
      ): Promise<{ access_token: string }> {
        const user = await this.userService.findOneByUserEmail(email);
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload, {
              secret: jwtConstants.secret, 
            }),
          
        };
      }




}
