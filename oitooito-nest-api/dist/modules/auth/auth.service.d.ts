import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './payload/jwt.payload';
import { User } from '../user/user.domain';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(username: string, password: string): Promise<string>;
    validateJwtToken(payload: JwtPayload): Promise<User>;
}
