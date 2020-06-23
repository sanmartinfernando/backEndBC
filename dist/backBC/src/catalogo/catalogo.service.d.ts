import { Model } from 'mongoose';
import { TipoCatalogo, Catalogo } from './interfaces/catalogo.interface';
import { TipoCatalogoDto, CatalogoDto } from './dto/catalogo-dto';
export declare class TipoCatalogoService {
    private readonly tipoCatalogoModel;
    constructor(tipoCatalogoModel: Model<TipoCatalogo>);
    createTipoCatalogo(createTCatDto: TipoCatalogoDto): Promise<TipoCatalogo>;
    getTipoCatalogos(): Promise<TipoCatalogo[]>;
    listarTCaDelete(): Promise<TipoCatalogo[]>;
    getTipoCatalogo(id: any): Promise<TipoCatalogo>;
    updateTCa(id: string, editTCa: TipoCatalogoDto): Promise<TipoCatalogo>;
    deleteLogTCa(id: string, editTCa: TipoCatalogoDto): Promise<TipoCatalogo>;
    deleteTCa(id: string): Promise<any>;
}
export declare class CatalogoService {
    private readonly CatalogoModel;
    constructor(CatalogoModel: Model<Catalogo>);
    createCatalogo(createCatDto: CatalogoDto): Promise<Catalogo>;
    getCatalogos(): Promise<Catalogo[]>;
    deleteCa(id: string): Promise<any>;
    updateCa(id: string, editCa: CatalogoDto): Promise<Catalogo>;
    deleteLogCa(id: string, editCa: CatalogoDto): Promise<Catalogo>;
    listarCaDelete(): Promise<Catalogo[]>;
}
