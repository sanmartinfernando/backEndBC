"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productos_schema_1 = require("./schemas/productos.schema");
exports.produProviders = [
    {
        provide: 'PROD_MODEL',
        useFactory: (connection) => connection.model('Productos', productos_schema_1.ProductosSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=productos.providers.js.map