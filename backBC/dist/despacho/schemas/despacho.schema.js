"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.DespachoSchema = new Schema({
    idReceta: String,
    datosReceta: { type: Schema.ObjectId, ref: 'Receta' },
    detalles: String,
    fecha: String,
    totalDespacho: Number,
    estadoDespacho: { type: String, default: 'nuevo' },
    identiPac: String,
    horarioEntrega: String,
    formaPago: String,
    estadoPago: String,
    idTransportista: { type: Schema.ObjectId, ref: 'Users' },
    idFarmacia: { type: Schema.ObjectId, ref: 'Farmacia' },
    tiempoEstimado: String,
    tiempoTransportista: String,
    entregaTrasnportista: { type: Boolean, default: false },
    entregaCliente: { type: Boolean, default: false },
    observacionTransportista: String,
    observacionCliente: String,
    datosFactura: {
        nombres: String,
        apellidos: String,
        cedula: String,
        provincia: String,
        ciudad: String,
        telefono: String,
    },
    datosEntrega: {
        callePrincipal: String,
        calleSecundaria: String,
        numCasa: String,
        referencia: String,
        provincia: String,
        ciudad: String,
        latitud: String,
        longitud: String,
    },
});
module.exports = mongoose.model('Despacho', exports.DespachoSchema);
exports.carritoSchema = new Schema({
    identiPac: String,
    compra: {},
});
module.exports = mongoose.model('Carrito', exports.carritoSchema);
//# sourceMappingURL=despacho.schema.js.map