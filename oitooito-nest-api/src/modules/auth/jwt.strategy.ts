import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt'
import { AuthService } from "./auth.service";
import { User } from "../user/user.domain";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    public constructor(
        private readonly authService: AuthService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'season'
        });
    }

    public async validate(payload: any): Promise<User> {
        const user: User = await this.authService.validateJwtToken(payload);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}