
import { Schema } from 'mongoose';

export const propietarioSchema = new Schema({

    descripcion: {
        type: String,
        uppercase: true,
        required: true,
        trim: true
    },

    identificacion_tipo: {
        type: String,
        default: '',
        trim: true
    },

    identificacion: {
        type: String,
        default: '',
        trim: true
    },

    telefono: {
        type: String,
        default: '',
        trim: true
    },

    direccion: {
        type: String,
        uppercase: true,
        default: '',
        trim: true
    },

    email: {
        type: String,
        lowercase: true,
        default: '',
        trim: true
    },

    foto_principal: {
        type: String,
        trim: true,
        default: ''
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true });
