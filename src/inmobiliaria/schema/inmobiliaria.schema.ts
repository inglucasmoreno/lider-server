
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
        default: '',
        trim: true
    },

    direccion: {
        type: String,
        default: '',
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

    foto_principal: {
        type: String,
        trim: true
    },

    fotos: {
        type: Array,
        trim: true
    },

},{ timestamps: true });
