import { DriverService } from './driver.service';
import { DriverListDto } from './dto/driver.list.dto';
import { DriverInsertDto } from './dto/driver.insert.dto';
import { DriverAddCarDto } from './dto/driver.add.car.dto';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    list(page?: number, size?: number, name?: string): Promise<DriverListDto[]>;
    getDriverById(id: number): Promise<DriverListDto>;
    addCarToDriver(driverId: number, carDto: DriverAddCarDto): Promise<DriverListDto>;
    insert(driverDto: DriverInsertDto): Promise<DriverListDto>;
}
