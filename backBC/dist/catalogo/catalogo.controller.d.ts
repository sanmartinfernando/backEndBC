import { TipoCatalogoService, CatalogoService } from './catalogo.service';
import { TipoCatalogoDto, CatalogoDto } from './dto/catalogo-dto';
import { TipoCatalogo } from './interfaces/catalogo.interface';
export declare class TipoCatalogoController {
    private readonly TipoCatalogoService;
    constructor(TipoCatalogoService: TipoCatalogoService);
    createTCa(createTCaDto: TipoCatalogoDto): Promise<TipoCatalogo>;
    getTCaAll(): Promise<TipoCatalogo[]>;
    listarTCaDelete(): Promise<TipoCatalogo[]>;
    getTipoCatalogo(id: string): Promise<TipoCatalogo>;
    updateTCat(updateCatDto: TipoCatalogoDto): Promise<TipoCatalogo>;
    deleteLogCa(updateCaDto: TipoCatalogoDto): Promise<TipoCatalogo>;
    deleteTCa(id: any): Promise<any>;
}
export declare class CatalogoController {
    private readonly CatalogoService;
    constructor(CatalogoService: CatalogoService);
    createTCa(createCaDto: CatalogoDto): Promise<import("./interfaces/catalogo.interface").Catalogo>;
    getTCaAll(): Promise<import("./interfaces/catalogo.interface").Catalogo[]>;
    deleteCa(id: any): Promise<any>;
    updateCa(updateCaDto: CatalogoDto): Promise<import("./interfaces/catalogo.interface").Catalogo>;
    deleteLogCa(updateCaDto: CatalogoDto): Promise<import("./interfaces/catalogo.interface").Catalogo>;
    listarTCaDelete(): Promise<import("./interfaces/catalogo.interface").Catalogo[]>;
}
