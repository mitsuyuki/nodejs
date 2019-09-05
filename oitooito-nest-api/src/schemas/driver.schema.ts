import { EntitySchema } from 'typeorm';
import { Driver } from 'src/modules/driver/driver.domain';

export const DriverSchema = new EntitySchema<Driver>({
    name: 'driver',
    tableName: 'DRV_DRIVERS',
    target: Driver,
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
})