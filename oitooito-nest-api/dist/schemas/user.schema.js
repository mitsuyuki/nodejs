"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_domain_1 = require("src/modules/user/user.domain");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    tableName: 'USR_USERS',
    target: user_domain_1.User,
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
//# sourceMappingURL=user.schema.js.map