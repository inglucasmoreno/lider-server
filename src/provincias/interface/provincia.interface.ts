import { Document } from "mongoose";

export interface IProvincia extends Document {
   readonly descripcion: string,
   readonly activo: boolean,
}