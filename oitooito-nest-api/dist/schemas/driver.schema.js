"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const driver_domain_1 = require("src/modules/driver/driver.domain");
exports.DriverSchema = new typeorm_1.EntitySchema({
    name: 'driver',
    tableName: 'DRV_DRIVERS',
    target: driver_domain_1.Driver,
    columns: {
        id: {
            name: 'DRV_ID',
            generated: true,
            primary: true,
            type: Number
        },
        name: {
            name: 'DRV_NAME',
            type: String,
            length: 70,
            nullable: false
        },
        licenseType: {
            name: 'DRV_LICENSE_TYPE',
            type: String,
            length: 2,
            nullable: false
        },
        email: {
            name: 'DRV_EMAIL',
            type: String,
            length: 50,
            nullable: true
        }
    },
    relations: {
        cars: {
            type: 'one-to-many',
            target: 'Car',
            inverseSide: 'driver'
        }
    }
});
//# sourceMappingURL=driver.schema.js.map