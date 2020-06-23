"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TipoCatalogoSchema = new mongoose.Schema({
    nombre: String,
    detalles: String,
    estado: { type: Boolean, default: true }
});
exports.CatalogoSchema = new mongoose.Schema({
    tipo: String,
    codigo: String,
    nombre: String,
    detalleTipo: String,
    estado: { type: Boolean, default: true }
});
//# sourceMappingURL=catalogos.schema.js.map