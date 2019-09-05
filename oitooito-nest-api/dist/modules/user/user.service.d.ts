import { Repository } from 'typeorm';
import { User } from './user.domain';
import { HashingServiceBase } from 'src/shared/hashing/hashing.service.base';
export declare class UserService {
    private readonly userRepository;
    private readonly hashingService;
    constructor(userRepository: Repository<User>, hashingService: HashingServiceBase);
    list(): Promise<User[]>;
    getByUsernameAndPassword(username: string, password: string): Promise<User>;
    getByUsernameAndId(username: string, id: number): Promise<User>;
    insert(user: User): Promise<User>;
}
