import { Document } from 'mongoose';

export interface IInmueble extends Document {
    readonly descripcion_corta: string;
    readonly descripcion_completa: string;
    readonly codigo: string;
    readonly ubicacion: string;
    readonly tipo: string;
    readonly venta: boolean;
    readonly fotos: string[];
    readonly precio: {
        valor: number,
        dolar: boolean
    }
    readonly activo: boolean;
}