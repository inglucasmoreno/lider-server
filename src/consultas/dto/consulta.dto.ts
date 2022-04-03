import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ConsultaDTO {

    @ApiProperty({ type: String, default: '', description: 'Codigo de inmueble' })
    readonly codigo: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Apellido de persona' })
    readonly apellido: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Nombre de persona' })
    readonly nombre: string;

    @ApiProperty({ type: String, default: '', description: 'Telefono de persona' })
    readonly telefono: string;

    @ApiProperty({ type: String, default: '', description: 'Email de persona' })
    readonly email: string; 

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Asunto de la consulta' })
    readonly asunto: string; 

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Mensaje de la consulta' })
    readonly mensaje: string; 
    
    @ApiProperty({ type: Boolean, default: true, description: 'Estado de propietario' })
    readonly activo: boolean; 

}