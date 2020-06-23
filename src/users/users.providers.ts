import { Connection } from 'mongoose';
import { UserSchema, PersonasSchema, RolesSchema, CitiesSchema } from './schemas/users.schema';

export const userProviders = [
  {  
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('Users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {  
    provide: 'PERSON_MODEL',
    useFactory: (connection: Connection) => connection.model('Personas', PersonasSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {  
    provide: 'ROLE_MODEL',
    useFactory: (connection: Connection) => connection.model('Roles', RolesSchema),
    inject: ['DATABASE_CONNECTION'],
  },

  {  
    provide: 'DATA_ECUA_MODEL',
    useFactory: (connection: Connection) => connection.model('CitiesEcuador', CitiesSchema ),
    inject: ['DATABASE_CONNECTION'],
  },

];