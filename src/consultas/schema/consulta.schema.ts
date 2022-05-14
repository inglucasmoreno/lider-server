
import { Schema } from 'mongoose';

export const consultaSchema = new Schema({

    codigo: {
        type: String,
        default: '',
        uppercase: true,
        trim: true
    },

    apellido: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    nombre: {
        type: String,
        required: true,
        uppercase: true,
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
        lowercase: true,
        trim: true
    },

    asunto: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    mensaje: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true });
