import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Productos } from './interfaces/productos.interface';
import { ProductosDto } from './dto/productos-dto';

import { Module } from '@nestjs/common';
import { MulterModule, FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class ProductosService {
  constructor(@Inject('PROD_MODEL') private readonly productosModel: Model<Productos>) { }

  async createProducto(createProdDto: any): Promise<Productos> {
    const createProd = await new this.productosModel(createProdDto).save();
    const producto = await this.productosModel.find({ nombre: createProdDto.nombre });
    return producto[0];
  }

  async getProductos(): Promise<Productos[]> {
    const productos = await this.productosModel.find();
    return productos;
  }


  async deleteProdu(id: string): Promise<any> {
    const deleteCa = await this.productosModel.findByIdAndDelete(id);
    return deleteCa;
  }

  async viewInfoPro(id: any): Promise<Productos> {
    const infoPro = await this.productosModel.findById(id);
    return infoPro;
  }

  async updateProd(id: string, editPro: ProductosDto, ): Promise<Productos> {
    const updateProd = await this.productosModel.findByIdAndUpdate(id, editPro, { new: true });
    return updateProd;
  }

  async deleteLogTCa(id: string, editPro: ProductosDto, ): Promise<Productos> {
    const deleteLogTCa = await this.productosModel.findByIdAndUpdate(id, editPro, { new: true });
    return deleteLogTCa;
  }






}
