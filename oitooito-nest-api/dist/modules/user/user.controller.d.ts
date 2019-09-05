import { UserService } from './user.service';
import { UserListDto } from './dto/user.list.dto';
import { UserInsertDto } from './dto/user.insert.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    list(): Promise<UserListDto[]>;
    insert(user: UserInsertDto): Promise<UserListDto>;
}
