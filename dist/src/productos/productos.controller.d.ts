import { ProductosService } from './productos.service';
import { ProductosDto } from './dto/productos-dto';
import { Productos } from './interfaces/productos.interface';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    crearProdu(res: any, createProDto: ProductosDto[]): Promise<any>;
    uploadFile(res: any, file: any, request: Productos): Promise<any>;
    getTCaAll(): Promise<Productos[]>;
    deleteProdu(id: any): Promise<any>;
    viewInfoPro(id: string): Promise<Productos>;
    updateProd(updateProDto: ProductosDto): Promise<Productos>;
    deleteLogProd(deleteLogProDto: ProductosDto): Promise<Productos>;
}
