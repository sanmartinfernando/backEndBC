import { Connection } from 'mongoose';
import { FarmaciaSchema, InventarioSchema } from './schemas/inventario.schema';

export const produInventario = [
    { 
        provide: 'INVE_MODEL',
        useFactory: (connection: Connection) => connection.model('Inventario',InventarioSchema),
        inject: ['DATABASE_CONNECTION'],
      },
    {  
        provide: 'FARM_MODEL',
        useFactory: (connection: Connection) => connection.model('Farmacia',FarmaciaSchema),
        inject: ['DATABASE_CONNECTION'],
      },

  

];

