export declare class TipoCatalogoDto {
    nombre: string;
    detalles: string;
    estado: {
        type: Boolean;
        default: true;
    };
}
export declare class CatalogoDto {
    tipo: string;
    codigo: string;
    nombre: string;
    detalleTipo: string;
    estado: {
        type: Boolean;
        default: true;
    };
}
