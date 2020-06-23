import { Model } from 'mongoose';
import { cateLabInter, detaLabInter, unidLabInter, camposLabInter, ordenLabInter } from './interfaces/laboratorio.interface';
import { catLabDto, detaLabDto, unidLabDto, camposLabDto, ordenLabDto } from './dto/laboratorio-dto';
export declare class LaboratorioService {
}
export declare class CatalogoLabService {
    private readonly CatalogoLabModel;
    constructor(CatalogoLabModel: Model<cateLabInter>);
    createCatLab(createCatDto: catLabDto): Promise<cateLabInter>;
    getCatLab(): Promise<cateLabInter[]>;
    getCatLabId(id: any): Promise<cateLabInter>;
    updateCatLab(id: string, editCaLabo: catLabDto): Promise<cateLabInter>;
    deleteCatLab(id: string): Promise<any>;
    deleteLogCatLab(id: string, editCa: catLabDto): Promise<cateLabInter>;
    listarCatLabDelete(): Promise<cateLabInter[]>;
}
export declare class DetalleLabService {
    private readonly DetalleLabModel;
    constructor(DetalleLabModel: Model<detaLabInter>);
    createDetLab(createDetaDto: detaLabDto): Promise<detaLabInter>;
    getDetLab(): Promise<detaLabInter[]>;
    getDetLabId(id: any): Promise<detaLabInter>;
    updateDetLab(id: string, editDetLab: detaLabDto): Promise<detaLabInter>;
    deleteDetLab(id: string): Promise<any>;
    deleteLogDetLab(id: string, editCa: detaLabDto): Promise<detaLabInter>;
    listarDetLabDelete(): Promise<detaLabInter[]>;
}
export declare class UnidadLabService {
    private readonly UnidadLabModel;
    constructor(UnidadLabModel: Model<unidLabInter>);
    createUniLab(createUniDto: unidLabDto): Promise<unidLabInter>;
    getUniLab(): Promise<unidLabInter[]>;
    getUniLabId(id: any): Promise<unidLabInter>;
    updateUniLab(id: string, editUniLab: unidLabDto): Promise<unidLabInter>;
    deleteUniLab(id: string): Promise<any>;
    deleteLogUniLab(id: string, editUni: detaLabDto): Promise<unidLabInter>;
    listarUniLabDelete(): Promise<unidLabInter[]>;
}
export declare class CampoLabService {
    private readonly CampoLabModel;
    constructor(CampoLabModel: Model<camposLabInter>);
    createCamLab(createCamDto: camposLabDto): Promise<camposLabInter>;
    getCamLab(): Promise<camposLabInter[]>;
    getCamLabId(id: any): Promise<camposLabInter>;
    updateCamLab(id: string, editCamLab: camposLabDto): Promise<camposLabInter>;
    deleteCamLab(id: string): Promise<any>;
    deleteLogCamLab(id: string, editCam: camposLabDto): Promise<camposLabInter>;
    listarCamLabDelete(): Promise<camposLabInter[]>;
}
export declare class OrdenLabService {
    private readonly OrdenLabModel;
    constructor(OrdenLabModel: Model<ordenLabInter>);
    createOrdLab(createOrdDto: ordenLabDto): Promise<ordenLabInter>;
    getOrdLab(): Promise<ordenLabInter[]>;
    getOrdLabId(id: any): Promise<ordenLabInter>;
    updateOrdLab(id: string, editOrdLab: ordenLabDto): Promise<ordenLabInter>;
    deleteOrdLab(id: string): Promise<any>;
    deleteLogOrdLab(id: string, editOrd: ordenLabDto): Promise<ordenLabInter>;
    listarOrdLabDelete(): Promise<ordenLabInter[]>;
}
