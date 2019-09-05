import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingServiceBase } from 'src/shared/hashing/hashing.service.base';

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly hashingService: HashingServiceBase
    ){

    }

    public async list(): Promise<User[]> {
        return await this.userRepository.find();
    }

    public async getByUsernameAndPassword(username: string, password: string): Promise<User> {
        return await this.userRepository.createQueryBuilder('user')
            .where('user.username = :username and user.password = :password', {
                username: username,
                password: this.hashingService.hash(password)
            }).getOne();
    }

    public async getByUsernameAndId(username: string, id: number): Promise<User> {
        return await this.userRepository.createQueryBuilder('user')
            .where('user.username = :username and user.id = :id', {
                username: username,
                id: id
            }).getOne();
    }

    public async insert(user: User): Promise<User> {
        user.password = this.hashingService.hash(user.password);
        return await this.userRepository.save(user);
    }
}
