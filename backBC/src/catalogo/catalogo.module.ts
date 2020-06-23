import { Module } from '@nestjs/common';
import { TipoCatalogoService, CatalogoService } from './catalogo.service';
import { TipoCatalogoController, CatalogoController } from './catalogo.controller';
import { DatabaseModule } from '../database/database.module';
import { cataProviders } from './catalogo.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [TipoCatalogoController, CatalogoController],
  providers: [TipoCatalogoService, ...cataProviders, CatalogoService]
})
export class CatalogoModule {}
     