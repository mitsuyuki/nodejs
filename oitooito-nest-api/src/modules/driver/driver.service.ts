import { Injectable } from '@nestjs/common';
import { Driver } from './driver.domain';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CarService } from '../car/car.service';
import { Car } from '../car/car.domain';

@Injectable()
export class DriverService {

    constructor(
        @InjectRepository(Driver)
        private readonly driverRepository: Repository<Driver>,
        private readonly carService: CarService
    ){

    }

    public async all(name?: string, page?: number, size?: number): Promise<Driver[]> {
        // return await this.driverRepository.find({
        //     where : {
        //         name: Like(`%${name ? name : ''}%`)
        //     },
        //     order: {
        //         name: 'ASC'
        //     },
        //     skip: page && size ? (page-1)*size : 0,
        //     take: size ? size : 100000000
        // });
        return await this.driverRepository
            .createQueryBuilder('driver')
            .leftJoinAndSelect('driver.cars','car')
            .where(`driver.name LIKE CONCAT('%', :name, '%')`,{name: name ? name : ''})
            .orderBy('driver.id')
            .skip(page && size ? (page-1)*size : 0)
            .take(size ? size : 100000000)
            .getMany();
    }

    public async driverById(id: number): Promise<Driver> {
        return await this.driverRepository.findOne(id);
    }

    public async insert(driver: Driver): Promise<Driver> {
        return await this.driverRepository.save(driver);
    }

    public async addCarToDriver(car: Car): Promise<Driver> {
        await this.carService.insert(car);
        return await this.driverRepository
        .createQueryBuilder('driver')
        .innerJoinAndSelect('driver.cars', 'car')
        .where('driver.id = :driverId', {driverId : car.driver.id})
        .getOne();

    }
}
