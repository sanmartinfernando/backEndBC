
import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { InventarioService, FarmaciaService } from './inventario.service';
import { InventarioDto, FarmaciaDto } from './dto/inventario-dto';


@Controller('inventario')
export class InventarioController {

  constructor(private readonly inventarioService: InventarioService) { }

  @Post('/crearInve')
  async createInve(@Body() createInveDto: InventarioDto) {
    console.log('createInveDto', createInveDto);

    const createInve = await this.inventarioService.createInventario(createInveDto);
    return createInve;
  }

  @Get('/listarInveAll')
  async getInveAll() {
    const inventarios = await this.inventarioService.getAllInventarios();
    return inventarios;
  }
  @Get('/listarInventarios/:id')
  async getInventarios(@Param('id') id: string) {
    const inventarios = await this.inventarioService.getInventarios(id);
    return inventarios;
  }


  @Get('/getInveMed/:id')
  async getInveMed(@Param('id') id: string) {
    const inventarios = await this.inventarioService.getInveMed(id);
    return inventarios;
  }


  @Delete('/deleteInve/:id')
  async deleteInve(@Param('id') id) {
    const deleteInve = this.inventarioService.deleteInventario(id);
    return deleteInve;
  }

}


@Controller('farmacia')
export class FarmController {

  constructor(private readonly farmaciaService: FarmaciaService) { }

  @Post('/crearFarm')
  async createFarm(@Body() createFarmDto: FarmaciaDto) {
    console.log(createFarmDto);

    const createFarm = await this.farmaciaService.createFarmacia(createFarmDto);
    return createFarm;
  }

  @Get('/listarFarm')
  async getFarmAll() {
    const farmacias = await this.farmaciaService.getFarmacias();
    return farmacias;
  }


  @Get('/listarFarmParent/:id')
  async listarFarmParent(@Param('id') id) {
    const farmacias = await this.farmaciaService.listarFarmParent(id);
    return farmacias;
  }


  @Put('/updateFarm')
  async updateFarm(@Body() updateFarmDto: FarmaciaDto) {

    const updateFarm = await this.farmaciaService.updateFarm(updateFarmDto['id'], updateFarmDto);
    return updateFarm;
  }

  @Delete('/deleteFarm/:id')
  async deleteFarm(@Param('id') id) {
    const deleteFarm = this.farmaciaService.deleteFarm(id);
    return deleteFarm;
  }

}