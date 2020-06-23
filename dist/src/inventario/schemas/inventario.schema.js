"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.InventarioSchema = new Schema({
    idProducto: { type: Schema.ObjectId, ref: 'Productos' },
    idFarmacia: { type: Schema.ObjectId, ref: 'Farmacia' },
    cantidad: String,
    precioVenta: Number,
    precioDistribucion: Number,
    estado: { type: Boolean, default: true }
});
module.exports = mongoose.model('Inventario', exports.InventarioSchema);
exports.FarmaciaSchema = new Schema({
    nombre: String,
    callePrincipal: String,
    calleSecundaria: String,
    numero: String,
    ciudad: String,
    provincia: String,
    razonSocial: String,
    tipo: String,
    parent: { type: Schema.ObjectId, ref: 'Farmacia' },
    lat: Number,
    lng: Number,
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('Farmacia', exports.FarmaciaSchema);
//# sourceMappingURL=inventario.schema.js.map