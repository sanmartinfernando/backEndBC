import { Model } from 'mongoose';
import { Receta } from './interfaces/receta.interface';
import { RecetaDto } from './dto/receta-dto';
export declare class RecetaService {
    private readonly recetaModel;
    constructor(recetaModel: Model<Receta>);
    createReceta(createReceDto: RecetaDto): Promise<Receta>;
    getRecetas(): Promise<Receta[]>;
    searchRece(id: any): Promise<Receta>;
    searchReceId(id: any): Promise<Receta>;
    searchRecePac(id: any): Promise<Receta[]>;
    searchRecePacMed(id: any): Promise<Receta[]>;
    searchReceMed(id: any): Promise<Receta[]>;
    deleteReceta(id: string): Promise<any>;
    updateReceta(id: string, editReceta: RecetaDto): Promise<Receta>;
    searchReceDate(date: String): Promise<Receta[]>;
}
