import { Connection } from 'mongoose';
import {  ProductosSchema } from './schemas/productos.schema';

export const produProviders = [

    { 
        provide: 'PROD_MODEL',
        useFactory: (connection: Connection) => connection.model('Productos',ProductosSchema),
        inject: ['DATABASE_CONNECTION'],
      },

  

];

