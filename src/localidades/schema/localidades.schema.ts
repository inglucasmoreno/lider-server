
import { Schema } from 'mongoose';

export const localidadSchema = new Schema({

    descripcion: {
        type: String,
        uppercase: true,
        required: true,
        trim: true
    },

    provincia: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'provincia'
    },

    activo: {
        type: Boolean,
        default: true,
    },

},{ timestamps: true, collection: 'localidades' });
