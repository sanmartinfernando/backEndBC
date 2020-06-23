export declare class DespachoDto {
    idReceta: string;
    datosReceta: String;
    identiPac: String;
    detalles: string;
    fecha: String;
    totalDespacho: Number;
    estado: {
        type: String;
        default: 'pendiente';
    };
    horarioEntrega: String;
    formapago: String;
    estadoPago: String;
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
export declare class CarritoDto {
    identiPac: String;
    compra: {};
}
