import { Document } from 'mongoose';
export interface cateLabInter extends Document {
    nombre: String;
    descripcion: String;
    estado: {
        type: Boolean;
        default: true;
    };
    codigo: String;
}
export interface detaLabInter extends Document {
    nombre: String;
    estado: {
        type: Boolean;
        default: true;
    };
}
export interface unidLabInter extends Document {
    nombre: String;
    estado: {
        type: Boolean;
        default: true;
    };
}
export interface camposLabInter extends Document {
    nombre: String;
    estado: {
        type: Boolean;
        default: true;
    };
    identiCatLabSchema: String;
    identiDetaLabSchema: String;
    identiUnidLabSchema: String;
    precio: Number;
}
export interface ordenLabInter extends Document {
    codigo: String;
    estado: {
        type: Boolean;
        default: true;
    };
    campos: Array<any>;
    identiHis: String;
    indentiMed: String;
    identiCenMed: String;
    identiLab: String;
}
