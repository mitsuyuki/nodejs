"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const driver_module_1 = require("./modules/driver/driver.module");
const typeorm_1 = require("@nestjs/typeorm");
const driver_schema_1 = require("./schemas/driver.schema");
const app_config_service_1 = require("./shared/app-config/app-config.service");
const app_config_module_1 = require("./shared/app-config/app-config.module");
const car_module_1 = require("./modules/car/car.module");
const car_schema_1 = require("./schemas/car.schema");
const user_module_1 = require("./modules/user/user.module");
const user_schema_1 = require("./schemas/user.schema");
const hashing_module_1 = require("./shared/hashing/hashing.module");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [app_config_module_1.AppConfigModule],
                inject: [app_config_service_1.AppConfigService],
                useFactory: (config) => ({
                    type: 'mysql',
                    host: config.get('DB_HOST'),
                    port: parseInt(config.get('DB_PORT')),
                    database: config.get('DB_NAME'),
                    username: config.get('DB_USER'),
                    password: config.get('DB_PASSWORD'),
                    entities: [
                        driver_schema_1.DriverSchema,
                        car_schema_1.CarSchema,
                        user_schema_1.UserSchema
                    ]
                })
            }),
            driver_module_1.DriverModule,
            car_module_1.CarModule,
            user_module_1.UserModule,
            hashing_module_1.HashingModule,
            auth_module_1.AuthModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map