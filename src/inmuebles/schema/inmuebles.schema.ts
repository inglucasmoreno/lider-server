
import { Schema } from 'mongoose';

export const inmuebleSchema = new Schema({

    propietario: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'propietario'
    },

    provincia: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'provincia'
    },

    codigo: {
        type: String,
        required: true,
        trim: true
    },

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

    ubicacion_publica: {
        type: String,
        required: true,
        trim: true
    },

    ubicacion_privada: {
        type: String,
        required: true,
        trim: true
    },

    tipo: {
        type: String,
        required: true,
        trim: true
    },

    foto_principal: {
        type: String,
        default: ""
    },

    fotos: {
        type: Array,
        default: []
    },

    venta: {
        type: Boolean,
        required: true,
    },

    precio_mostrar: {
        type: Boolean,
        default: true
    },

    precio_dolar: {
        type: Boolean,
        default: false
    },

    precio_valor: {
        type: Number,
        required: true
    },
    
    activo: {
        type: Boolean,
        required: true,
        default: true
    }

},{ timestamps: true });
