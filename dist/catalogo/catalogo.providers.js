"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catalogos_schema_1 = require("./schemas/catalogos.schema");
exports.cataProviders = [
    {
        provide: 'TIPO_CAT_MODEL',
        useFactory: (connection) => connection.model('Catalogo', catalogos_schema_1.TipoCatalogoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'CAT_MODEL',
        useFactory: (connection) => connection.model('CatalogoDetalles', catalogos_schema_1.CatalogoSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=catalogo.providers.js.map