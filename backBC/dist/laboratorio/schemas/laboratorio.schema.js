"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.catLabSchema = new Schema({
    nombre: String,
    descripcion: String,
    codigo: String,
    especialidad: String,
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('CategoriaLab', exports.catLabSchema);
exports.detaLabSchema = new Schema({
    nombre: String,
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('DetalleLab', exports.detaLabSchema);
exports.unidLabSchema = new Schema({
    nombre: String,
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('UnidadLab', exports.unidLabSchema);
exports.camposLabSchema = new Schema({
    nombre: String,
    estado: { type: Boolean, default: true },
    precio: Number,
    identiCatLabSchema: { type: Schema.ObjectId, ref: 'CategoriaLab' },
    identiDetaLabSchema: { type: Schema.ObjectId, ref: 'DetalleLab' },
    identiUnidLabSchema: { type: Schema.ObjectId, ref: 'UnidadLab' },
});
module.exports = mongoose.model('CamposLab', exports.camposLabSchema);
exports.ordenLabSchema = new Schema({
    estado: { type: Boolean, default: true },
    codigo: String,
    campos: [{ type: Schema.ObjectId, ref: 'CamposLab' }],
    identiHis: String,
    indentiMed: String,
    identiCenMed: String,
    identiLab: String,
});
module.exports = mongoose.model('OrdenLab', exports.ordenLabSchema);
//# sourceMappingURL=laboratorio.schema.js.map