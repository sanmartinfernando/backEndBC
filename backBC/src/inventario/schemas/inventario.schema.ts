//import * as mongoose from 'mongoose';

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
  
export const InventarioSchema = new  Schema({
    idProducto: {type: Schema.ObjectId, ref: 'Productos'},
    idFarmacia: {type: Schema.ObjectId, ref: 'Farmacia'},
    cantidad: String,
    precioVenta: Number,    
    precioDistribucion: Number, 
    estado: {type: Boolean, default: true}
});
module.exports = mongoose.model('Inventario', InventarioSchema);

export const FarmaciaSchema = new Schema({
    nombre: String,
    callePrincipal: String,
    calleSecundaria: String,
    numero: String,
    ciudad: String,
    provincia: String,
    razonSocial: String,
    tipo: String,
    parent: {type: Schema.ObjectId, ref: 'Farmacia'},
    lat: Number,
    lng: Number,
    estado: {type: Boolean, default: true},

   
}); 
module.exports = mongoose.model('Farmacia', FarmaciaSchema);

