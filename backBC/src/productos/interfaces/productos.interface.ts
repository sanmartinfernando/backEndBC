import { Document } from 'mongoose';
import { Double, Decimal128 } from 'bson';
export interface Productos extends Document{
    id: string,
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
}
