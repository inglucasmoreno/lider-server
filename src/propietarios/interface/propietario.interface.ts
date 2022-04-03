import { Document } from "mongoose";

export interface IPropietario extends Document {
   readonly descripcion: string,
   readonly identificacion_tipo: string,
   readonly identificacion: string,
   readonly telefono: string,
   readonly direccion: string,
   readonly email: string,
   readonly activo: boolean,
}