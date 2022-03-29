import { Document } from 'mongoose';

export interface IInmobiliaria extends Document {
    readonly descripcion: string;
    readonly logo: string;
    readonly fotos: string[];
    readonly direccion: string;
    readonly telefono: string;
    readonly email: string;
}