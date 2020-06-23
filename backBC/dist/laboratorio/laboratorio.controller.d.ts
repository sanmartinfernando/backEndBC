import { CatalogoLabService, DetalleLabService, UnidadLabService, CampoLabService, OrdenLabService } from './laboratorio.service';
import { catLabDto, detaLabDto, unidLabDto, camposLabDto, ordenLabDto } from './dto/laboratorio-dto';
export declare class LaboratorioController {
}
export declare class CatalogoLabController {
    private readonly CatalogoLabService;
    constructor(CatalogoLabService: CatalogoLabService);
    createCatLab(createCatLabDto: catLabDto): Promise<import("./interfaces/laboratorio.interface").cateLabInter>;
    getCatLab(): Promise<import("./interfaces/laboratorio.interface").cateLabInter[]>;
    getCatLabId(id: string): Promise<import("./interfaces/laboratorio.interface").cateLabInter>;
    updateCatLab(updateCatLabDto: catLabDto): Promise<import("./interfaces/laboratorio.interface").cateLabInter>;
    deleteCatLab(id: any): Promise<any>;
    deleteLogCa(updateCaLabDto: catLabDto): Promise<import("./interfaces/laboratorio.interface").cateLabInter>;
    listarCatLabDelete(): Promise<import("./interfaces/laboratorio.interface").cateLabInter[]>;
}
export declare class DetalleLabController {
    private readonly DetalleLabService;
    constructor(DetalleLabService: DetalleLabService);
    createDetLab(res: any, createDetLabDto: detaLabDto): Promise<any>;
    getDetLab(): Promise<import("./interfaces/laboratorio.interface").detaLabInter[]>;
    getDetLabId(id: string): Promise<import("./interfaces/laboratorio.interface").detaLabInter>;
    updateDetLab(updateDetLabDto: detaLabDto): Promise<import("./interfaces/laboratorio.interface").detaLabInter>;
    deleteDetLab(id: any): Promise<any>;
    deleteLogDet(updateDetLabDto: detaLabDto): Promise<import("./interfaces/laboratorio.interface").detaLabInter>;
    listarDetLabDelete(): Promise<import("./interfaces/laboratorio.interface").detaLabInter[]>;
}
export declare class UnidadLabController {
    private readonly UnidadLabService;
    constructor(UnidadLabService: UnidadLabService);
    createUniLab(res: any, createUniLabDto: unidLabDto): Promise<any>;
    getUniLab(): Promise<import("./interfaces/laboratorio.interface").unidLabInter[]>;
    getUniLabId(id: string): Promise<import("./interfaces/laboratorio.interface").unidLabInter>;
    updateUniLab(updateUniLabDto: unidLabDto): Promise<import("./interfaces/laboratorio.interface").unidLabInter>;
    deleteUniLab(id: any): Promise<any>;
    deleteLogUni(updateUniLabDto: unidLabDto): Promise<import("./interfaces/laboratorio.interface").unidLabInter>;
    listarUniLabDelete(): Promise<import("./interfaces/laboratorio.interface").unidLabInter[]>;
}
export declare class CampoLabController {
    private readonly CampoLabService;
    constructor(CampoLabService: CampoLabService);
    createCamLab(res: any, createCamLabDto: camposLabDto): Promise<any>;
    getCamLab(): Promise<import("./interfaces/laboratorio.interface").camposLabInter[]>;
    getCamLabId(id: string): Promise<import("./interfaces/laboratorio.interface").camposLabInter>;
    updateCamLab(updateCamLabDto: camposLabDto): Promise<import("./interfaces/laboratorio.interface").camposLabInter>;
    deleteCamLab(id: any): Promise<any>;
    deleteLogCam(updateCamLabDto: camposLabDto): Promise<import("./interfaces/laboratorio.interface").camposLabInter>;
    listarCamLabDelete(): Promise<import("./interfaces/laboratorio.interface").camposLabInter[]>;
}
export declare class OrdenLabController {
    private readonly OrdenLabService;
    constructor(OrdenLabService: OrdenLabService);
    createOrdLab(createOrdLabDto: ordenLabDto): Promise<import("./interfaces/laboratorio.interface").ordenLabInter>;
    getordLab(): Promise<import("./interfaces/laboratorio.interface").ordenLabInter[]>;
    getOrdLabId(id: string): Promise<import("./interfaces/laboratorio.interface").ordenLabInter>;
    updateCamLab(updateOrdLabDto: ordenLabDto): Promise<import("./interfaces/laboratorio.interface").ordenLabInter>;
    deleteOrdLab(id: any): Promise<any>;
    deleteLogOrd(updateOrdLabDto: ordenLabDto): Promise<import("./interfaces/laboratorio.interface").ordenLabInter>;
    listarOrdLabDelete(): Promise<import("./interfaces/laboratorio.interface").ordenLabInter[]>;
}
