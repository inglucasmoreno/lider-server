
import { Schema } from 'mongoose';

export const inmobiliariaSchema = new Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    logo: {
        type: String,
        default: '',
        trim: true
    },

    descripcion: {
        type: String,
        required: true,
        trim: true
    },

    direccion: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },

    telefono: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },

    foto_principal: {
        type: String,
        trim: true,
        default: ''
    },

    fotos: {
        type: Array,
        trim: true,
        default: []
    },

},{ timestamps: true });
