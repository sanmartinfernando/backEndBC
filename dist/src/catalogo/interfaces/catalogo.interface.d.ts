import { Document } from 'mongoose';
export interface TipoCatalogo extends Document {
    id: string;
    nombre: string;
    detalles: string;
    estado: {
        type: Boolean;
        default: true;
    };
}
export interface Catalogo extends Document {
    id: string;
    tipo: string;
    codigo: string;
    nombre: string;
    detalleTipo: string;
    estado: {
        type: Boolean;
        default: true;
    };
}
