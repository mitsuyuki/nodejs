"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const driver_domain_1 = require("./driver.domain");
const driver_service_1 = require("./driver.service");
const driver_list_dto_1 = require("./dto/driver.list.dto");
const driver_insert_dto_1 = require("./dto/driver.insert.dto");
const driver_add_car_dto_1 = require("./dto/driver.add.car.dto");
const passport_1 = require("@nestjs/passport");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    list(page, size, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driverService.all(name, page, size).then((drivers) => {
                return drivers.map(driver => {
                    const driverDto = new driver_list_dto_1.DriverListDto(driver.id, driver.name, driver.licenseType);
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
            });
        });
    }
    getDriverById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driverService.driverById(id).then((driver) => {
                if (driver) {
                    return new driver_list_dto_1.DriverListDto(driver.id, driver.name, driver.licenseType);
                }
                else {
                    throw new common_1.NotFoundException(`Não existe motor com o ID ${id}`);
                }
            });
        });
    }
    addCarToDriver(driverId, carDto) {
        return __awaiter(this, void 0, void 0, function* () {
            let driver = yield this.driverService.driverById(driverId);
            if (!driver) {
                throw new common_1.NotFoundException(`O motorista ${driverId} não foi localizado!`);
            }
            const newCar = {
                brand: carDto.brand,
                model: carDto.model,
                driver: driver,
                id: 0
            };
            return this.driverService.addCarToDriver(newCar).then((driver) => {
                const driverDto = new driver_list_dto_1.DriverListDto(driver.id, driver.name, driver.licenseType);
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
        });
    }
    insert(driverDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = new driver_domain_1.Driver(driverDto.name, driverDto.licenseType, driverDto.email);
            return yield this.driverService.insert(driver).then((driver) => new driver_list_dto_1.DriverListDto(driver.id, driver.name, driver.licenseType));
        });
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Query('page')), __param(1, common_1.Query('size')), __param(2, common_1.Query('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "list", null);
__decorate([
    common_1.Get(':id'),
    common_1.HttpCode(302),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getDriverById", null);
__decorate([
    common_1.Put(':driverId/cars/add'),
    __param(0, common_1.Param('driverId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, driver_add_car_dto_1.DriverAddCarDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "addCarToDriver", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_insert_dto_1.DriverInsertDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "insert", null);
DriverController = __decorate([
    common_1.Controller('driver'),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
exports.DriverController = DriverController;
//# sourceMappingURL=driver.controller.js.map