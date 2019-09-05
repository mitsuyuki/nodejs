import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserListDto } from './dto/user.list.dto';
import { UserInsertDto } from './dto/user.insert.dto';
import { User } from './user.domain';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

    public constructor(
        private readonly userService: UserService
    ){}

    @Get()
    @UseGuards(AuthGuard())
    public async list(): Promise<UserListDto[]> {
        return await this.userService.list().then(
            (users) =>
                users.map(user => new UserListDto(user.id, user.username))
        );
    }

    @Post()
    public async insert(@Body()user: UserInsertDto): Promise<UserListDto> {
        const newUser: User = new User();
        newUser.username = user.username;
        newUser.password = user.password;
        return await this.userService.insert(newUser).then(
            (user) => new UserListDto(user.id, user.username)
        );
    }
}
