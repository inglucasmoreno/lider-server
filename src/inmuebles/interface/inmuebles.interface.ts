import { Document } from 'mongoose';

export interface IInmueble extends Document {
    readonly propietario: string;
    readonly provincia: string;
    readonly codigo: string;
    readonly descripcion_corta: string;
    readonly descripcion_completa: string;
    readonly ubicacion_publica: string;
    readonly ubicacion_privada: string;
    readonly tipo: string;
    readonly fotos_principal: string;
    readonly fotos: string[];
    readonly alquiler_venta: string;
    readonly precio_mostrar: boolean;
    readonly precio_dolar: boolean;
    readonly precio_valor: number;
    readonly activo: boolean;
}