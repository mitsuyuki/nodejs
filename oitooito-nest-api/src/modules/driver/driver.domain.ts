import { Car } from "../car/car.domain";

export class Driver {
    public id: number;
    public name: string;
    public licenseType: 'A' | 'B' | 'AB' | 'C';
    public email?: string;

    public cars: Car[];

    public constructor(name:string, licenseType: string, email?: string) {
        this.name = name;
        this.licenseType = licenseType as 'A' | 'B' | 'AB' | 'C';
        this.email = email;
   }
}