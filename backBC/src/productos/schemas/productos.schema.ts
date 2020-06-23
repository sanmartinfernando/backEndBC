
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
export const ProductosSchema = new Schema({
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
    imageProd: {type: String},
    estado: { type: Boolean, default: true },
 
});
module.exports = mongoose.model('Productos', ProductosSchema); 