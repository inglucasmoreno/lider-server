import { ApiProperty } from "@nestjs/swagger";

export class ConsultaUpdateDTO {

    @ApiProperty({ type: String, description: 'Codigo de inmueble' })
    readonly codigo: string;

    @ApiProperty({ type: String, description: 'Apellido de persona' })
    readonly apellido: string;

    @ApiProperty({ type: String, description: 'Nombre de persona' })
    readonly nombre: string;

    @ApiProperty({ type: String, default: '', description: 'Telefono de persona' })
    readonly telefono: string;

    @ApiProperty({ type: String, default: '', description: 'Email de persona' })
    readonly email: string; 

    @ApiProperty({ type: String, default: '', description: 'Asunto de la consulta' })
    readonly asunto: string; 

    @ApiProperty({ type: String, default: '', description: 'Mensaje de la consulta' })
    readonly mensaje: string; 
    
    @ApiProperty({ type: Boolean, default: true, description: 'Estado de propietario' })
    readonly activo: boolean; 

}