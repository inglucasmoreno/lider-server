
import { Schema } from 'mongoose';

export const consultaSchema = new Schema({

    codigo: {
        type: String,
        default: '',
        trim: true
    },

    apellido: {
        type: String,
        required: true,
        trim: true
    },

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    telefono: {
        type: String,
        default: '',
        trim: true
    },

    email: {
        type: String,
        default: '',
        trim: true
    },

    asunto: {
        type: String,
        required: true,
        trim: true
    },

    mensaje: {
        type: String,
        required: true,
        trim: true
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true });
