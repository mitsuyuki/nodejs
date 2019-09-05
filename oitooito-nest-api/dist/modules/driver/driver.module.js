"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const driver_domain_1 = require("./driver.domain");
const driver_controller_1 = require("./driver.controller");
const driver_service_1 = require("./driver.service");
const typeorm_1 = require("@nestjs/typeorm");
const car_module_1 = require("../car/car.module");
const auth_module_1 = require("../auth/auth.module");
let DriverModule = class DriverModule {
};
DriverModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([driver_domain_1.Driver]),
            car_module_1.CarModule,
            auth_module_1.AuthModule
        ],
        providers: [
            driver_domain_1.Driver,
            driver_controller_1.DriverController,
            driver_service_1.DriverService
        ],
        controllers: [
            driver_controller_1.DriverController
        ]
    })
], DriverModule);
exports.DriverModule = DriverModule;
//# sourceMappingURL=driver.module.js.map