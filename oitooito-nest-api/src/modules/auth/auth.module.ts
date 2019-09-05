import { Module, forwardRef } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt.auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({
            defaultStrategy: 'jwt'
        }),
        JwtModule.register({
            secretOrPrivateKey: 'season',
            signOptions: {
                jwtid: 'oitooito',
                expiresIn: 60
            }
        })
    ],
    providers: [
        UserService,
        AuthService,
        JwtStrategy
    ],
    controllers: [AuthController]
})
export class AuthModule {}
