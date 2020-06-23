import { InventarioService, FarmaciaService } from './inventario.service';
import { InventarioDto, FarmaciaDto } from './dto/inventario-dto';
export declare class InventarioController {
    private readonly inventarioService;
    constructor(inventarioService: InventarioService);
    createInve(createInveDto: InventarioDto): Promise<import("./interfaces/inventario.interface").Inventario>;
    getInveAll(): Promise<import("./interfaces/inventario.interface").Inventario[]>;
    getInventarios(id: string): Promise<import("./interfaces/inventario.interface").Inventario[]>;
    getInveMed(id: string): Promise<import("./interfaces/inventario.interface").Inventario[]>;
    deleteInve(id: any): Promise<any>;
}
export declare class FarmController {
    private readonly farmaciaService;
    constructor(farmaciaService: FarmaciaService);
    createFarm(createFarmDto: FarmaciaDto): Promise<import("./interfaces/inventario.interface").Farmacia>;
    getFarmAll(): Promise<import("./interfaces/inventario.interface").Farmacia[]>;
    listarFarmParent(id: any): Promise<import("./interfaces/inventario.interface").Farmacia[]>;
    updateFarm(updateFarmDto: FarmaciaDto): Promise<import("./interfaces/inventario.interface").Farmacia>;
    deleteFarm(id: any): Promise<any>;
}
