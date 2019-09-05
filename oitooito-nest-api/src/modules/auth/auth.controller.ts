import { Controller, Body, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {


    public constructor(
        private readonly authService: AuthService
    ){ }

    @Post()
    public async login(@Body()loginDto: LoginDto): Promise<any> {
        const token: string = await this.authService.signIn(loginDto.username, loginDto.password);
        return {
            token: token
        };
    }
}
