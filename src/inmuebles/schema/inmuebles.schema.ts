
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

    localidad: {
        type: Schema.Types.ObjectId,
        ref: 'localidad',
        default: null
    },

    codigo: {
        type: String,
        trim: true,
        default: ''
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

    alquiler_venta: {
        type: String,
        required: true,
    },

    precio_mostrar: {
        type: Boolean,
        default: true
    },

    precio_moneda: {
        type: String,
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
