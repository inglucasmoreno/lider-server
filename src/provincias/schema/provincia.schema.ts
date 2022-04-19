import { Schema } from 'mongoose';

export const provinciaSchema = new Schema({

    descripcion: {
        type: String,
        uppercase: true,
        required: true,
        trim: true
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true });
