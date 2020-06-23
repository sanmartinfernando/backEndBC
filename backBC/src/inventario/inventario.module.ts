import { Module } from '@nestjs/common';
import { InventarioController, FarmController } from './inventario.controller';
import { InventarioService, FarmaciaService } from './inventario.service';
import { DatabaseModule } from  '../database/database.module';
import { produInventario } from './inventario.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [InventarioController,FarmController],
  providers: [InventarioService, ...produInventario, FarmaciaService]
})
export class InventarioModule {}
 