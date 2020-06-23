import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { produProviders } from './productos.providers';
import { DatabaseModule } from  '../database/database.module';
import { MulterModule } from '@nestjs/platform-express';



@Module({
  imports:[DatabaseModule, MulterModule.register({
     dest:  './uploads/',
  })],
  controllers: [ProductosController],
  providers: [ProductosService, ...produProviders]
})
export class ProductosModule {}
