import * as mongoose from 'mongoose';

export const TipoCatalogoSchema = new mongoose.Schema({
    nombre: String,
    detalles: String,
    estado: {type: Boolean, default: true}
});

export const CatalogoSchema = new mongoose.Schema({
    tipo: String,
    codigo: String,
    nombre: String,
    detalleTipo: String,
    estado: {type: Boolean, default: true}
});