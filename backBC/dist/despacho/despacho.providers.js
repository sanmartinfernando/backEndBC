"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const despacho_schema_1 = require("./schemas/despacho.schema");
exports.despaProviders = [
    {
        provide: 'DESP_MODEL',
        useFactory: (connection) => connection.model('Despacho', despacho_schema_1.DespachoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'CARRI_MODEL',
        useFactory: (connection) => connection.model('Carrito', despacho_schema_1.carritoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=despacho.providers.js.map