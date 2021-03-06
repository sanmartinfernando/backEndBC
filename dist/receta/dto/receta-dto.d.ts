export declare class RecetaDto {
    codiRece: String;
    datosMedico: string;
    datosPaciente: string;
    detalles: string;
    indicaciones: string;
    indicacionesAdicionales: String;
    idCitaMed: String;
    fecha: String;
    hora: String;
    identiPac: String;
    identiMed: String;
    estadoReceta: {
        type: String;
        default: 'nueva';
    };
}
