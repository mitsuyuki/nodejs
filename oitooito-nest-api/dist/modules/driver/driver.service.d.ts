import { Driver } from './driver.domain';
import { Repository } from 'typeorm';
import { CarService } from '../car/car.service';
import { Car } from '../car/car.domain';
export declare class DriverService {
    private readonly driverRepository;
    private readonly carService;
    constructor(driverRepository: Repository<Driver>, carService: CarService);
    all(name?: string, page?: number, size?: number): Promise<Driver[]>;
    driverById(id: number): Promise<Driver>;
    insert(driver: Driver): Promise<Driver>;
    addCarToDriver(car: Car): Promise<Driver>;
}
