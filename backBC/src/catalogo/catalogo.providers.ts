import { Connection } from 'mongoose';
import {  TipoCatalogoSchema, CatalogoSchema } from './schemas/catalogos.schema';

export const cataProviders = [
  {  
    provide: 'TIPO_CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Catalogo', TipoCatalogoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('CatalogoDetalles', CatalogoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];