import { Model } from 'mongoose';
import { Inventario, Farmacia } from './interfaces/inventario.interface';
import { InventarioDto, FarmaciaDto } from './dto/inventario-dto';
export declare class InventarioService {
    private readonly inventarioModel;
    constructor(inventarioModel: Model<Inventario>);
    createInventario(createInvDto: InventarioDto): Promise<Inventario>;
    getAllInventarios(): Promise<Inventario[]>;
    getInveMed(id: any): Promise<Inventario[]>;
    getInventarios(id: any): Promise<Inventario[]>;
    deleteInventario(id: string): Promise<any>;
}
export declare class FarmaciaService {
    private readonly farmaciaModel;
    constructor(farmaciaModel: Model<Farmacia>);
    createFarmacia(createFarDto: FarmaciaDto): Promise<Farmacia>;
    getFarmacias(): Promise<Farmacia[]>;
    listarFarmParent(id: string): Promise<Farmacia[]>;
    updateFarm(id: string, updateFarmDto: any): Promise<Farmacia>;
    deleteFarm(id: string): Promise<any>;
}
