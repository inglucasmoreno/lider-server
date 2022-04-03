import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class PropietarioDTO {

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Descripcion de propietario' })
    readonly descripcion: string;

    @ApiProperty({ type: String, description: 'Tipo de identificacion' })
    readonly identificacion_tipo: string;

    @ApiProperty({ type: String, description: 'Identificacion de propietario' })
    readonly identificacion: string;

    @ApiProperty({ type: String, description: 'Telefono de propietario' })
    readonly telefono: string;

    @ApiProperty({ type: String, description: 'Direccion de propietario' })
    readonly direccion: string;

    @ApiProperty({ type: String, description: 'Email de propietario' })
    readonly email: string; 
    
    @ApiProperty({ type: Boolean, description: 'Estado de propietario' })
    readonly activo: boolean; 


}