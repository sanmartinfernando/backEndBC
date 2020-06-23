import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, Req, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDto } from './dto/productos-dto';
import { diskStorage } from 'multer';
import { Productos } from './interfaces/productos.interface';
import { FileInterceptor } from '@nestjs/platform-express';



@Controller('productos')
export class ProductosController {

  constructor(private readonly productosService: ProductosService) { }

  @Post('/crearProdu')
  async crearProdu(@Res() res,@Body() createProDto: ProductosDto[]) {
    console.log('llego a crear');
    console.log(createProDto);
    for (let index = 0; index < createProDto.length; index++) {
      const createProdu = await this.productosService.createProducto(createProDto[index]);
      
    }
  return res.status(HttpStatus.OK).json({
            message: 'Item Successfully Created',
        });;
  }
  
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/',
      filename: (req, file, cb) => { return cb(null, new Date().toISOString() + file.originalname) }
    })
  }))
  async uploadFile(@Res() res,@UploadedFile() file, @Req() request: Productos) {
    
    const createProDto = {
      nombre: request['body']['nombre'],
      tipo: request['body']['tipo'],
      detalles: request['body']['detalles'],
      precio: request['body']['precio'],
      imageProd: request['file']['path']
    }
    const createProdu = await this.productosService.createProducto(createProDto);
    return res.status(HttpStatus.OK).json({
      message: 'Item Successfully Created',
  });;
  }

  @Get('/listarProdu')
  async getTCaAll() {
    const Productos = await this.productosService.getProductos();
    return Productos;
  }

  @Delete('/deleteProdu/:id')
  async deleteProdu(@Param('id') id) {
    const proDelete = this.productosService.deleteProdu(id);
    return proDelete;
  }

  @Get('/viewInfoPro/:id')
  async viewInfoPro(@Param('id') id: string) {
    const infoPro = await this.productosService.viewInfoPro(id);
    return infoPro;
  }

  @Put('/updateProd')
  async updateProd(@Body() updateProDto: ProductosDto) {
    const updateProd = await this.productosService.updateProd(updateProDto['id'], updateProDto);
    return updateProd;
  }

  @Put('/deleteLogProd')
  async deleteLogProd(@Body() deleteLogProDto: ProductosDto) {
    const deleteLogProd = await this.productosService.deleteLogTCa(deleteLogProDto['id'], deleteLogProDto);
    return deleteLogProd;
  }



}
