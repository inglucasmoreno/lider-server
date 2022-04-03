import { Document } from "mongoose";

export interface IConsulta extends Document {
   readonly codigo: string,
   readonly apellido: string,
   readonly nombre: string,
   readonly telefono: string,
   readonly email: string,
   readonly asunto: string,
   readonly mensaje: string,
   readonly activo: boolean,
}