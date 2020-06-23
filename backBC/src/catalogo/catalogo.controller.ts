import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TipoCatalogoService, CatalogoService } from './catalogo.service';

import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { TipoCatalogoDto, CatalogoDto } from './dto/catalogo-dto';
import { TipoCatalogo } from './interfaces/catalogo.interface';

@Controller('tipocatalogo')
export class TipoCatalogoController {
  constructor(private readonly TipoCatalogoService: TipoCatalogoService) { }

  @Post('/crearTCa')
  async createTCa(@Body() createTCaDto: TipoCatalogoDto) {
    console.log(createTCaDto);
    const createTCat = await this.TipoCatalogoService.createTipoCatalogo(createTCaDto);
    return createTCat;
  } 

  @Get('/listarTCa')
  async getTCaAll() {
    const tipoCatalogos = await this.TipoCatalogoService.getTipoCatalogos();
    return tipoCatalogos;
  }

  @Get('/listarTCaDelete')
  async listarTCaDelete() {
    const tipoCatalogos = await this.TipoCatalogoService.listarTCaDelete();
    return tipoCatalogos;
  }

  @Get('/listarTCa/:id')
  async getTipoCatalogo(@Param('id') id: string) {
    console.log('iddd', id);
    const tipoCatalogo = await this.TipoCatalogoService.getTipoCatalogo(id);
    return tipoCatalogo;
  }

  @Put('/updateTCa')
  async updateTCat(@Body() updateCatDto: TipoCatalogoDto) {
    console.log('iddd', updateCatDto['id']);
    const tipoCatUpdate = await this.TipoCatalogoService.updateTCa(updateCatDto['id'], updateCatDto);
    return tipoCatUpdate;
  }

  @Put('/deleteLogTCa')
  async deleteLogCa(@Body() updateCaDto: TipoCatalogoDto) {
    console.log('iddd', updateCaDto['id']);
    const tipoCatUpdate = await this.TipoCatalogoService.deleteLogTCa(updateCaDto['id'], updateCaDto);
    return tipoCatUpdate;
  }

  @Delete('/deleteTCat/:id')
  async deleteTCa(@Param('id') id) {
    const tipoCatDelete = this.TipoCatalogoService.deleteTCa(id);
    return tipoCatDelete;
  }

}


@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly CatalogoService: CatalogoService) { }

  @Post('/crearCa')
  async createTCa(@Body() createCaDto: CatalogoDto) {
    console.log(createCaDto);
    const createCat = await this.CatalogoService.createCatalogo(createCaDto);
    return createCat;
  }

  @Get('/listarCa')
  async getTCaAll() {
    const Catalogos = await this.CatalogoService.getCatalogos();
    return Catalogos;
  }

  @Delete('/deleteCa/:id')
  async deleteCa(@Param('id') id) {
    const CatDelete = this.CatalogoService.deleteCa(id);
    return CatDelete;
  }

  @Put('/updateCa')
  async updateCa(@Body() updateCaDto: CatalogoDto) {
    console.log('iddd', updateCaDto['id']);
    const tipoCatUpdate = await this.CatalogoService.updateCa(updateCaDto['id'], updateCaDto);
    return tipoCatUpdate;
  }
  @Put('/deleteLogCa')
  async deleteLogCa(@Body() updateCaDto: CatalogoDto) {
    console.log('iddd', updateCaDto['id']);
    const tipoCatUpdate = await this.CatalogoService.deleteLogCa(updateCaDto['id'], updateCaDto);
    return tipoCatUpdate;
  }
  @Get('/listarCaDelete')
  async listarTCaDelete() {
    const catalogos = await this.CatalogoService.listarCaDelete();
    return catalogos;
  }


}
