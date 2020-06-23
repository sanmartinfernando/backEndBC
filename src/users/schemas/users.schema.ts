import { json } from "express";

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
  

export const UserSchema = new Schema({
    nombres: String,
    apellidos: String,
    username: {type: String, index:true, unique: true},
    password: {type: String, index:true},
    cedula: {type: String,  unique: true},
    telefono: String,
    fotoPerfil: {type: String},
    sexo: String,
    email: {type: String,  unique: true},
    rol: {type: Schema.ObjectId, ref: 'Roles'},
    idFarmacia: {type: Schema.ObjectId, ref: 'Farmacia'},

    estado: {type: Boolean, default: true},
});
module.exports = mongoose.model('Users', UserSchema);  

export const RolesSchema = new Schema({
    nombre: String,
    estado: {type: Boolean, default: true},
}); 
module.exports = mongoose.model('Roles', RolesSchema);  

export const PersonasSchema = new Schema({
    cedula: String,
    digito: String,
    nombres: String,
    sexo: String,
    fecnac: String,
    codpro: Number,
    codcan: Number,
    codpar: Number,
    pronac: Number,
    cannac: Number,
    parnac: Number,
    estado: {type: Boolean, default: true}
});

module.exports = mongoose.model('Personas', PersonasSchema);  


export const CitiesSchema = new Schema({
    ciudades: {
    },
}); 
module.exports = mongoose.model('CitiesEcuador', CitiesSchema);  
