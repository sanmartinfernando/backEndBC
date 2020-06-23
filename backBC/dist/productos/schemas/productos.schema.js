"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.ProductosSchema = new Schema({
    categoria: String,
    nombre: String,
    detalles: String,
    formaFarmaceutica: String,
    concentracion: String,
    via: String,
    principioActivo: String,
    presentacionComercial: String,
    fechaCaducidad: String,
    cum: String,
    numRegisSanit: String,
    imageProd: { type: String },
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('Productos', exports.ProductosSchema);
//# sourceMappingURL=productos.schema.js.map