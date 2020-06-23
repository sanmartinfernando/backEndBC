import { Document } from 'mongoose';
export interface Notificacion extends Document {
    tipo: string;
    fecha: string;
    detalle: string;
    idPaciente: string;
    idMedico: string;
    estado: {
        type: Boolean;
        default: true;
    };
}
