import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Inventario, Farmacia } from './interfaces/inventario.interface';
import { InventarioDto, FarmaciaDto } from './dto/inventario-dto';

@Injectable()
export class InventarioService {
  constructor(@Inject('INVE_MODEL') private readonly inventarioModel: Model<Inventario>) { }

  async createInventario(createInvDto: InventarioDto): Promise<Inventario> {
    const createdInv = await new this.inventarioModel(createInvDto).save();

    const inventario = await this.inventarioModel.find({ idProducto: createInvDto.idProducto });
    return inventario[0];
  }

  async getAllInventarios(): Promise<Inventario[]> {
    const inventarios = await this.inventarioModel.find().populate({ path: 'idProducto' }).populate({ path: 'idFarmacia' });
    return inventarios;
  }


  async getInveMed(id: any): Promise<Inventario[]> {
    const tipoCatalogo = await this.inventarioModel.find({ idFarmacia: id }).populate({ path: 'idProducto' }).populate({ path: 'idFarmacia' });
    return tipoCatalogo;
  }


  async getInventarios(id: any): Promise<Inventario[]> {
    var result = [];
    var ids = id.split(",");
    console.log(ids);

    for (let i = 0; i < id.length; i++) {
      if (ids[i] == undefined) break;
      var inventario = await this.inventarioModel.findById(ids[i]).populate({ path: 'idProducto' });
      result.push(inventario);
    }
    return result;
  }



  async deleteInventario(id: string): Promise<any> {
    const deleteInve = await this.inventarioModel.findByIdAndDelete(id);
    return deleteInve;

  }


}


@Injectable()
export class FarmaciaService {
  constructor(@Inject('FARM_MODEL') private readonly farmaciaModel: Model<Farmacia>) { }

  async createFarmacia(createFarDto: FarmaciaDto): Promise<Farmacia> {
    const createdFarm = await new this.farmaciaModel(createFarDto).save();
    const farmCreat = await this.farmaciaModel.find({ nombre: createFarDto.nombre })

    return farmCreat[0];
  }

  async getFarmacias(): Promise<Farmacia[]> {
    const farmacias = await this.farmaciaModel.find().populate({ path: 'parent' });
    return farmacias;
  }
  async listarFarmParent(id: string): Promise<Farmacia[]> {
    const farmacias = await this.farmaciaModel.find({ parent:id }).populate({ path: 'parent' });
    return farmacias;
  }
  
  async updateFarm(id: string, updateFarmDto: any,): Promise<Farmacia> {
    const updateNotif = await this.farmaciaModel.findByIdAndUpdate(id, updateFarmDto, {new : true});
    const farm  = await this.farmaciaModel.findById(id).populate({ path: 'parent' });
    return farm;
  }


  async deleteFarm(id: string): Promise<any> {
    const deleteFarm = await this.farmaciaModel.findByIdAndDelete(id);
    return deleteFarm;

  }

}

