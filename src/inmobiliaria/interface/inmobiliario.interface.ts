import { Document } from 'mongoose';

export interface IInmobiliaria extends Document {
    readonly nombre: string;
    readonly logo: string;
    readonly descripcion: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly email: string;
    readonly foto_principal: string;
    readonly fotos: string;
}