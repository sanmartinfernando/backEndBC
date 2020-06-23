import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoCatalogo, Catalogo } from './interfaces/catalogo.interface';
import { TipoCatalogoDto, CatalogoDto } from './dto/catalogo-dto';
 
@Injectable() 
export class TipoCatalogoService {
    constructor(@Inject('TIPO_CAT_MODEL') private readonly tipoCatalogoModel: Model<TipoCatalogo>){}

      async createTipoCatalogo(createTCatDto: TipoCatalogoDto): Promise<TipoCatalogo> {
        const createdTCa = await new this.tipoCatalogoModel(createTCatDto).save();
        const tipoCatalogo  = await this.tipoCatalogoModel.find( {nombre:createTCatDto.nombre});
        return tipoCatalogo[0];
      }
     
      async getTipoCatalogos(): Promise<TipoCatalogo[]> {
        const tipoCatalogos =  await this.tipoCatalogoModel.find();
        return tipoCatalogos;
      }
      async  listarTCaDelete(): Promise<TipoCatalogo[]> {
        const tipoCatalogos =  await this.tipoCatalogoModel.find({estado : false});
        return tipoCatalogos;
      }

      async getTipoCatalogo(id: any): Promise<TipoCatalogo> {
        const tipoCatalogo  = await this.tipoCatalogoModel.findById(id);
        return tipoCatalogo;
      }
 
      async updateTCa(id: string, editTCa: TipoCatalogoDto,): Promise<TipoCatalogo> {
        const updateTCa = await this.tipoCatalogoModel.findByIdAndUpdate(id, editTCa, {new : true});
        return updateTCa ;
      }

      async deleteLogTCa(id: string, editTCa: TipoCatalogoDto,): Promise<TipoCatalogo> {
        const updateTCa = await this.tipoCatalogoModel.findByIdAndUpdate(id, editTCa, {new : true});
        return updateTCa;
      }
  
      async deleteTCa(id: string): Promise<any> {
        const deleteTCa = await this.tipoCatalogoModel.findByIdAndDelete(id);
        return deleteTCa;
       
      } 

}

@Injectable()
export class CatalogoService {
  constructor(@Inject('CAT_MODEL') private readonly CatalogoModel: Model<Catalogo>){}

  async createCatalogo(createCatDto: CatalogoDto): Promise<Catalogo> {
    const createdCa =  await new this.CatalogoModel(createCatDto).save();
    const catalogoCreate = await this.CatalogoModel.find({nombre:createCatDto.nombre})
    return catalogoCreate[0];
  }

  async getCatalogos(): Promise<Catalogo[]> {
    const Catalogos =  await this.CatalogoModel.find();
    return Catalogos;
  }

  async deleteCa(id: string): Promise<any> {
    const deleteCa = await this.CatalogoModel.findByIdAndDelete(id);
    return deleteCa;
   
  }

  async updateCa(id: string, editCa: CatalogoDto,): Promise<Catalogo> {
    const updateCa = await this.CatalogoModel.findOneAndUpdate(id, editCa, {new : true});
    return updateCa;
  }
  async deleteLogCa(id: string, editCa: CatalogoDto,): Promise<Catalogo> {
    const updateCa = await this.CatalogoModel.findOneAndUpdate(id, editCa, {new : true});
    return updateCa;
  }

  async  listarCaDelete(): Promise<Catalogo[]> {
    const catalogos =  await this.CatalogoModel.find({estado : false});
    return catalogos;
  }

    
} 

