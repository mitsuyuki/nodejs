import { Controller, Get, Post, HttpCode, Body, Query, Param, NotFoundException, Put, UseGuards } from '@nestjs/common';
import { Driver } from './driver.domain';
import { DriverService } from './driver.service';
import { DriverListDto } from './dto/driver.list.dto';
import { DriverInsertDto } from './dto/driver.insert.dto';
import { Car } from '../car/car.domain';
import { DriverAddCarDto } from './dto/driver.add.car.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('driver')
export class DriverController {

    constructor(
        private readonly driverService: DriverService
    ) {

    }

    @Get()
    @UseGuards(AuthGuard())
    public async list(@Query('page') page?: number, @Query('size') size?: number, @Query('name') name?: string): Promise<DriverListDto[]> {
        return await this.driverService.all(name, page, size).then(
            (drivers: Driver[]) => {
                return drivers.map(driver => {
                    const driverDto: DriverListDto = new DriverListDto(driver.id, driver.name, driver.licenseType);
                    if (driver.cars) {
                        for (let car of driver.cars) {
                            driverDto.cars.push({
                                id: car.id,
                                brand: car.brand,
                                model: car.model
                            });
                        }
                    }
                    return driverDto;
                });
            }
        );
    }

    @Get(':id')
    @HttpCode(302)
    public async getDriverById(@Param('id') id: number): Promise<DriverListDto> {
        return await this.driverService.driverById(id).then(
            (driver) => {
                if (driver) {
                    return new DriverListDto(driver.id, driver.name, driver.licenseType);
                } else {
                    throw new NotFoundException(`Não existe motor com o ID ${id}`);
                }
            }
        );
    }

    @Put(':driverId/cars/add')
    public async addCarToDriver(@Param('driverId') driverId: number, @Body() carDto: DriverAddCarDto): Promise<DriverListDto> {
        let driver: Driver = await this.driverService.driverById(driverId);
        if (!driver) {
            throw new NotFoundException(`O motorista ${driverId} não foi localizado!`);
        }
        const newCar: Car = {
            brand: carDto.brand,
            model: carDto.model,
            driver: driver,
            id: 0
        };
        return this.driverService.addCarToDriver(newCar).then(
            (driver) => {
                const driverDto: DriverListDto = new DriverListDto(driver.id, driver.name, driver.licenseType);
                if (driver.cars) {
                    for (let car of driver.cars) {
                        driverDto.cars.push({
                            id: car.id,
                            brand: car.brand,
                            model: car.model
                        });
                    }
                }
                return driverDto;
            }
        );
    }


    @Post()
    @HttpCode(201)
    public async insert(@Body() driverDto: DriverInsertDto): Promise<DriverListDto> {
        const driver: Driver = new Driver(driverDto.name, driverDto.licenseType, driverDto.email);
        return await this.driverService.insert(driver).then(
            (driver) => new DriverListDto(driver.id, driver.name, driver.licenseType)
        );
    }
}
