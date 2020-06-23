"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laboratorio_schema_1 = require("./schemas/laboratorio.schema");
exports.laboProviders = [
    {
        provide: 'CAT_LAB_MODEL',
        useFactory: (connection) => connection.model('CategoriaLab', laboratorio_schema_1.catLabSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'DETA_LAB_MODEL',
        useFactory: (connection) => connection.model('DetalleLab', laboratorio_schema_1.detaLabSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'UNID_LAB_MODEL',
        useFactory: (connection) => connection.model('UnidadLab', laboratorio_schema_1.unidLabSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'CAMP_LAB_MODEL',
        useFactory: (connection) => connection.model('CamposLab', laboratorio_schema_1.camposLabSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'ORD_LAB_MODEL',
        useFactory: (connection) => connection.model('OrdenLab', laboratorio_schema_1.ordenLabSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=laboratorio.providers.js.map