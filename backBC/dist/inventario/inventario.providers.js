"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inventario_schema_1 = require("./schemas/inventario.schema");
exports.produInventario = [
    {
        provide: 'INVE_MODEL',
        useFactory: (connection) => connection.model('Inventario', inventario_schema_1.InventarioSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'FARM_MODEL',
        useFactory: (connection) => connection.model('Farmacia', inventario_schema_1.FarmaciaSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=inventario.providers.js.map