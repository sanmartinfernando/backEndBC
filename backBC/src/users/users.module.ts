import { Module } from '@nestjs/common';
import { UsersService, PersonaService, cityService } from './users.service';
import { UsersController, PersonaController, citiesController } from './users.controller';
import { DatabaseModule } from  '../database/database.module';
import { userProviders } from './users.providers';

@Module({
  imports:[DatabaseModule],
  providers: [UsersService, ...userProviders, PersonaService, cityService],
  controllers: [UsersController, PersonaController, citiesController],
  exports: [UsersService, PersonaService, cityService],
})
export class UsersModule {}
