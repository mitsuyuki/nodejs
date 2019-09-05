import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './car.domain';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarService {

    constructor(
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>
    ){

    }

    public async insert(car: Car): Promise<Car> {
        return await this.carRepository.save(car);
    }
}
