"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = require("./schemas/users.schema");
exports.userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('Users', users_schema_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'PERSON_MODEL',
        useFactory: (connection) => connection.model('Personas', users_schema_1.PersonasSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'ROLE_MODEL',
        useFactory: (connection) => connection.model('Roles', users_schema_1.RolesSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'DATA_ECUA_MODEL',
        useFactory: (connection) => connection.model('CitiesEcuador', users_schema_1.CitiesSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.providers.js.map