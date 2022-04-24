import { Schema } from 'mongoose';

export const codigoSchema = new Schema({

    tipo: {
        type: String,
        required: true,
        trim: true
    },
    
    prefijo: {
        type: String,
        uppercase: true,
        required: true,   
    },
    
    numero: {
        type: Number,
        required: true,
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true });
