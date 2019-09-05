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
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const car_service_1 = require("../car/car.service");
let DriverService = class DriverService {
    constructor(driverRepository, carService) {
        this.driverRepository = driverRepository;
        this.carService = carService;
    }
    all(name, page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driverRepository
                .createQueryBuilder('driver')
                .leftJoinAndSelect('driver.cars', 'car')
                .where(`driver.name LIKE CONCAT('%', :name, '%')`, { name: name ? name : '' })
                .orderBy('driver.id')
                .skip(page && size ? (page - 1) * size : 0)
                .take(size ? size : 100000000)
                .getMany();
        });
    }
    driverById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driverRepository.findOne(id);
        });
    }
    insert(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driverRepository.save(driver);
        });
    }
    addCarToDriver(car) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.carService.insert(car);
            return yield this.driverRepository
                .createQueryBuilder('driver')
                .innerJoinAndSelect('driver.cars', 'car')
                .where('driver.id = :driverId', { driverId: car.driver.id })
                .getOne();
        });
    }
};
DriverService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(driver_domain_1.Driver)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        car_service_1.CarService])
], DriverService);
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map