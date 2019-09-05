import { CarListDto } from "src/modules/car/dto/car.list.dto";
export declare class DriverListDto {
    id: number;
    name: string;
    licenseType: string;
    cars: CarListDto[];
    constructor(id: number, name: string, licenseType: string);
}
