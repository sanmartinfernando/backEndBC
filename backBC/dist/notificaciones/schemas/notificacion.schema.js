"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.notificacionSchema = new Schema({
    tipo: String,
    fecha: String,
    detalle: String,
    idPaciente: String,
    idMedico: String,
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('Notificacion', exports.notificacionSchema);
//# sourceMappingURL=notificacion.schema.js.map