import { Document } from "mongoose";

export interface ICodigo extends Document {
   readonly tipo: string,
   readonly prefijo: string,
   readonly numero: number,
   readonly activo: boolean,
}