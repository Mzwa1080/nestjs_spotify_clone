import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authservice : AuthService){}

    @Post('login')
    async login(@Body() body: LoginDto) {
      return this.authservice.signIn(body.email, body.password);
    }
}
