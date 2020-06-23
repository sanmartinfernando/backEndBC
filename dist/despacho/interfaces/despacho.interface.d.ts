import { Document } from 'mongoose';
export interface Despacho extends Document {
    id: string;
    datosReceta: String;
    idReceta: string;
    identiPac: String;
    horarioEntrega: String;
    formapago: String;
    estadoPago: String;
    detalles: string;
    fecha: String;
    totalDespacho: Number;
    idTransportista: String;
    idFarmacia: String;
    tiempoEstimado: String;
    tiempoTransportista: String;
    entregaTrasnportista: {
        type: Boolean;
        default: false;
    };
    entregaCliente: {
        type: Boolean;
        default: false;
    };
    observacionTransportista: String;
    observacionCliente: String;
    estado: {
        type: String;
        default: 'pendiente';
    };
    datosFactura: {
        nombres: String;
        apellidos: String;
        cedula: String;
        provincia: String;
        ciudad: String;
        telefono: String;
    };
    datosEntrega: {
        callePrincipal: String;
        calleSecundaria: String;
        numCasa: String;
        referencia: String;
        provincia: String;
        ciudad: String;
        latitud: String;
        longitud: String;
    };
}
export interface Carrito extends Document {
    identiPac: String;
    compra: {};
}
