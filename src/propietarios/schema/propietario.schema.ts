
import { Schema } from 'mongoose';

export const propietarioSchema = new Schema({

    descripcion: {
        type: String,
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
        default: '',
        trim: true
    },

    email: {
        type: String,
        default: '',
        trim: true
    },

    foto_principal: {
        type: String,
        trim: true
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true });
