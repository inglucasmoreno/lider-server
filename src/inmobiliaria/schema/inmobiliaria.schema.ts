
import { Schema } from 'mongoose';

export const inmobiliariaSchema = new Schema({
    
    descripcion: {
        type: String,
        trim: true
    },

    logo: {
        type: String,
        trim: true
    },

    fotos: {
        type: Array,
        trim: true
    },

    direccion: {
        type: String,
        trim: true
    },

    telefono: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        required: true,
    }

},{ timestamps: true });
