import { RecetaService } from './receta.service';
import { RecetaDto } from './dto/receta-dto';
export declare class RecetaController {
    private readonly recetasService;
    constructor(recetasService: RecetaService);
    createRece(createReceDto: RecetaDto): Promise<import("./interfaces/receta.interface").Receta>;
    getReceAll(): Promise<import("./interfaces/receta.interface").Receta[]>;
    searchRece(id: string): Promise<import("./interfaces/receta.interface").Receta>;
    searchReceId(id: string): Promise<import("./interfaces/receta.interface").Receta>;
    searchRecePac(id: string): Promise<import("./interfaces/receta.interface").Receta[]>;
    searchRecePacMed(id: string): Promise<import("./interfaces/receta.interface").Receta[]>;
    searchReceMed(id: string): Promise<import("./interfaces/receta.interface").Receta[]>;
    deleteRece(id: any): Promise<any>;
    updateTCat(updateReceDto: RecetaDto): Promise<import("./interfaces/receta.interface").Receta>;
    getRecetaDateId(getReceDateId: RecetaDto): Promise<void>;
    listarDespaDate(date: String): Promise<import("./interfaces/receta.interface").Receta[]>;
}
