import { EntitySchema } from "typeorm";
import { User } from "src/modules/user/user.domain";

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    tableName: 'USR_USERS',
    target: User,
    columns: {
        id: {
            generated: true,
            primary: true,
            name: 'USR_ID',
            type: Number
        },
        username: {
            name: 'USR_USERNAME',
            length: 50,
            type: String,
            nullable: false
        },
        password: {
            name: 'USR_PASSWORD',
            length: 200,
            type: String,
            nullable: false
        }
    }
});