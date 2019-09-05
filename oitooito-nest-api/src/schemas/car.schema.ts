import { EntitySchema } from "typeorm";
import { Car } from "src/modules/car/car.domain";

export const CarSchema = new EntitySchema<Car>({
    name: 'car',
    tableName: 'CAR_CARS',
    target: Car,
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