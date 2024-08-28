import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { userDto } from 'src/user/dto/userDto';

@Controller('auth')
export class AuthController {

    constructor(private authservice : AuthService, private userService : UserService){}

    @Post('register')
    async registerUser(@Body() body: userDto) {
        return await this.userService.register(body)
    }

    @Post('login')
    async login(@Body() body: LoginDto) {
      return this.authservice.signIn(body.email, body.password);
    }


}
