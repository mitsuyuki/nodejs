import { Module } from "@nestjs/common";
import { Driver } from "./driver.domain";
import { DriverController } from "./driver.controller";
import { DriverService } from "./driver.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarModule } from "../car/car.module";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Driver]),
        CarModule,
        AuthModule
    ],
    providers: [
        Driver,
        DriverController,
        DriverService
    ],
    controllers: [
        DriverController
    ]
})
export class DriverModule {

}