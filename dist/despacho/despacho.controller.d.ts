import { DespachoService } from './despacho.service';
import { DespachoDto } from './dto/despacho-dto';
export declare class DespachoController {
    private readonly despachoService;
    constructor(despachoService: DespachoService);
    createDespa(createDespa: DespachoDto): Promise<import("./interfaces/despacho.interface").Despacho>;
    getDespaAll(): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    getDespaDate(date: String): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    getDespaIdPac(identiPac: String): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    getDespaDateNew(date: String): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    searchDespa(idReceta: string): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    searchDespaIdRece(id: string): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    searchDespaId(id: string): Promise<import("./interfaces/despacho.interface").Despacho[]>;
    deleteDespa(id: any): Promise<any>;
    createCart(createJson: any): Promise<any>;
    listCart(idPac: string): Promise<any[]>;
    deleteCart(id: any): Promise<any>;
    updateTCat(updateReceDto: DespachoDto): Promise<import("./interfaces/despacho.interface").Despacho>;
}
