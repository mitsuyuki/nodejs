import { Repository } from 'typeorm';
import { Car } from './car.domain';
export declare class CarService {
    private readonly carRepository;
    constructor(carRepository: Repository<Car>);
    insert(car: Car): Promise<Car>;
}
