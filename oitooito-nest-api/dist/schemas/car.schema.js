"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const car_domain_1 = require("src/modules/car/car.domain");
exports.CarSchema = new typeorm_1.EntitySchema({
    name: 'car',
    tableName: 'CAR_CARS',
    target: car_domain_1.Car,
    columns: {
        id: {
            primary: true,
            generated: true,
            name: 'CAR_ID',
            type: Number
        },
        brand: {
            name: 'CAR_BRAND',
            length: 25,
            nullable: false,
            type: String
        },
        model: {
            name: 'CAR_MODEL',
            length: 25,
            nullable: false,
            type: String
        }
    },
    relations: {
        driver: {
            type: 'many-to-one',
            target: 'Driver',
            inverseSide: 'cars',
            joinColumn: {
                name: 'DRV_ID'
            }
        }
    }
});
//# sourceMappingURL=car.schema.js.map