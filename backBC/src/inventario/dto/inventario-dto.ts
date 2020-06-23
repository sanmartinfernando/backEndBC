export class InventarioDto {
    idProducto: string;
    idFarmacia: string;
    cantidad: string;
    precioVenta: Number;
    precioDistribucion: Number;
    estado: {type: Boolean, default: true};
}

export class FarmaciaDto {
    
    
    nombre: string;
    callePrincipal: string;
    calleSecundaria: String;
    numero: String;
    ciudad: String;
    provincia: String;
    razonSocial: string;
    tipo: string;
    parent: String;
    lat: Number;
    lng: Number;
    estado: {type: Boolean, default: true};
   
   
}
