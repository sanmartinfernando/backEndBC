import { Model } from 'mongoose';
import { Productos } from './interfaces/productos.interface';
import { ProductosDto } from './dto/productos-dto';
export declare class ProductosService {
    private readonly productosModel;
    constructor(productosModel: Model<Productos>);
    createProducto(createProdDto: any): Promise<Productos>;
    getProductos(): Promise<Productos[]>;
    deleteProdu(id: string): Promise<any>;
    viewInfoPro(id: any): Promise<Productos>;
    updateProd(id: string, editPro: ProductosDto): Promise<Productos>;
    deleteLogTCa(id: string, editPro: ProductosDto): Promise<Productos>;
}
