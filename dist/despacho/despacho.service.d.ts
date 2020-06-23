import { Model } from 'mongoose';
import { Despacho, Carrito } from './interfaces/despacho.interface';
import { DespachoDto } from './dto/despacho-dto';
export declare class DespachoService {
    private readonly despachoModel;
    private readonly carritoM;
    constructor(despachoModel: Model<Despacho>, carritoM: Model<Carrito>);
    createDespa(createDespa: DespachoDto): Promise<Despacho>;
    getDespa(): Promise<Despacho[]>;
    getDespaDate(date: String): Promise<Despacho[]>;
    getDespaDateNew(date: String): Promise<Despacho[]>;
    getDespaDateIdPac(identiPac: String): Promise<Despacho[]>;
    searchDespa(idReceta: any): Promise<Despacho[]>;
    searchDespaIdRece(id: any): Promise<Despacho[]>;
    searchDespaIdDespa(id: any): Promise<Despacho[]>;
    deleteDespa(id: string): Promise<any>;
    updateDespa(id: string, editDepa: DespachoDto): Promise<Despacho>;
    createCart(data: any): Promise<any>;
    listCart(idPac: String): Promise<any[]>;
    deleteCart(id: string): Promise<any>;
}
