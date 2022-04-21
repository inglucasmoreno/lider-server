import { Document } from 'mongoose';

export interface ILocalidad extends Document {
    readonly descripcion: string;
    readonly provincia: string;
    readonly activo: boolean;
}