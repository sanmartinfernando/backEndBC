export declare class catLabDto {
    nombre: String;
    descripcion: string;
    estado: {
        type: Boolean;
        default: true;
    };
    codigo: String;
}
export declare class detaLabDto {
    nombre: String;
    estado: {
        type: Boolean;
        default: true;
    };
}
export declare class unidLabDto {
    nombre: String;
    estado: {
        type: Boolean;
        default: true;
    };
}
export declare class camposLabDto {
    nombre: String;
    estado: {
        type: Boolean;
        default: true;
    };
    identiCat: String;
    identiDet: String;
    identiUni: String;
    precio: Number;
}
export declare class ordenLabDto {
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
