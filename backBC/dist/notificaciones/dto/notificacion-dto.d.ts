export declare class NotificacionDto {
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
