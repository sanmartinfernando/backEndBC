import { Document } from 'mongoose';
export interface Inventario extends Document {
    id: string;
    idProducto: string;
    idFarmacia: string;
    cantidad: string;
    precioVenta: Number;
    precioDistribucion: Number;
    estado: {
        type: Boolean;
        default: true;
    };
}
export interface Farmacia extends Document {
    id: string;
    nombre: string;
    callePrincipal: string;
    calleSecundaria: String;
    numero: String;
    ciudad: String;
    provincia: String;
    razonSocial: string;
    tipo: String;
    parent: String;
    lat: Number;
    lng: Number;
    estado: {
        type: Boolean;
        default: true;
    };
}
