"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.RecetaSchema = new mongoose.Schema({
    codiRece: String,
    datosMedico: String,
    datosPaciente: String,
    detalles: String,
    indicaciones: String,
    indicacionesAdicionales: String,
    idCitaMed: String,
    fecha: String,
    hora: String,
    identiPac: String,
    identiMed: String,
    estadoReceta: { type: String, default: 'nueva' }
});
module.exports = mongoose.model('Receta', exports.RecetaSchema);
//# sourceMappingURL=receta.schema.js.map