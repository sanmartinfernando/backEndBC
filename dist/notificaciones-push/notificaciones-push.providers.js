"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notificacion_push_schema_1 = require("./schemas/notificacion-push.schema");
exports.notifiProviders = [
    {
        provide: 'NOTIPUSH_MODEL',
        useFactory: (connection) => connection.model('Token', notificacion_push_schema_1.TokenSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=notificaciones-push.providers.js.map