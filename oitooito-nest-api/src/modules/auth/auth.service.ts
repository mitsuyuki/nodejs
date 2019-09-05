import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './payload/jwt.payload';
import { User } from '../user/user.domain';

@Injectable()
export class AuthService {

    public constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    public async signIn(username: string, password: string): Promise<string> {
        const user: User = await this.userService.getByUsernameAndPassword(username,password);
        if(!user) {
            throw new UnauthorizedException('Usuario e/ou senha incorretos');
        }
        const jwtPayload: JwtPayload = {
            id: user.id,
            username: user.username
        };
        return await this.jwtService.signAsync(jwtPayload);
    }

    public async validateJwtToken(payload: JwtPayload): Promise<User> {
        return await this.userService.getByUsernameAndId(payload.username, payload.id);
    }
}
