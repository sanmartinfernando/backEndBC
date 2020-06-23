"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const receta_schema_1 = require("./schemas/receta.schema");
exports.recetaProviders = [
    {
        provide: 'RECE_MODEL',
        useFactory: (connection) => connection.model('Receta', receta_schema_1.RecetaSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=receta.providers.js.map