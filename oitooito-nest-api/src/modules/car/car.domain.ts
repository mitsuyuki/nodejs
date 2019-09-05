import { Driver } from "../driver/driver.domain";

export class Car {
    public id: number;
    public brand: string;
    public model: string;

    public driver: Driver;
}