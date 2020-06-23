"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    nombres: String,
    apellidos: String,
    username: { type: String, index: true, unique: true },
    password: { type: String, index: true },
    cedula: { type: String, unique: true },
    telefono: String,
    fotoPerfil: { type: String },
    sexo: String,
    email: { type: String, unique: true },
    rol: { type: Schema.ObjectId, ref: 'Roles' },
    idFarmacia: { type: Schema.ObjectId, ref: 'Farmacia' },
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('Users', exports.UserSchema);
exports.RolesSchema = new Schema({
    nombre: String,
    estado: { type: Boolean, default: true },
});
module.exports = mongoose.model('Roles', exports.RolesSchema);
exports.PersonasSchema = new Schema({
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
    estado: { type: Boolean, default: true }
});
module.exports = mongoose.model('Personas', exports.PersonasSchema);
exports.CitiesSchema = new Schema({
    ciudades: {},
});
module.exports = mongoose.model('CitiesEcuador', exports.CitiesSchema);
//# sourceMappingURL=users.schema.js.map