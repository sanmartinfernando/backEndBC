import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogoModule } from './catalogo/catalogo.module';
import { DatabaseModule } from './database/database.module';
import { ProductosModule } from './productos/productos.module';
import { InventarioModule } from './inventario/inventario.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';





import * as express from 'express'

@Module({ 

  imports: [
    DatabaseModule, ProductosModule, CatalogoModule, InventarioModule, UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
