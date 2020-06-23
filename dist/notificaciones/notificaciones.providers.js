"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notificacion_schema_1 = require("./schemas/notificacion.schema");
exports.notifiProviders = [
    {
        provide: 'NOTIFI_MODEL',
        useFactory: (connection) => connection.model('Notificacion', notificacion_schema_1.notificacionSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=notificaciones.providers.js.map