
import { Schema } from 'mongoose';

export const inmuebleSchema = new Schema({
    
    descripcion_corta: {
        type: String,
        required: true,
        trim: true
    },

    descripcion_completa: {
        type: String,
        required: true,
        trim: true
    },

    codigo: {
        type: String,
        required: true,
        trim: true
    },

    ubicacion: {
        type: String,
        trim: true
    },

    tipo: {
        type: String,
        required: true,
        trim: true
    },

    venta: {
        type: Boolean,
        required: true,
    },

    fotos: {
        type: Array,
    },

    precio: {
        valor: {
            type: Number,
            required: true
        },
        dolar: {
            type: Boolean,
            required: true
        }
    },
    
    activo: {
        type: Boolean,
        required: true,
        default: true
    }

},{ timestamps: true });
