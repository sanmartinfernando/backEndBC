import { Document } from 'mongoose';
export interface UserInter extends Document{
    id: string;
    nombres: String,
    apellidos: String,
    username: {type: String, index:true, unique: true},
    password: {type: String, index:true},
    rol: String,
    cedula: {type: String,  unique: true},
    telefono: String,
    email: {type: String,  unique: true},
    idFarmacia: String,
    fotoPerfil: {type: String};
    sexo: String;
    estado: {type: Boolean, default: true},

}

export interface RoleInter extends Document{
    nombre: String,
    estado: {type: Boolean, default: true},
}

export interface PersonaInter extends Document{
    cedula: String,
    digito: String,
    nombres: String,
    sexo:String,
    fecnac: String,
    codpro: Number,
    codcan: Number,
    codpar: Number,
    pronac: Number,
    cannac: Number,
    parnac: Number,
    estado: {type: Boolean, default: true}

}


export interface CitiesInter extends Document{
    ciudades: {
       
    },
}