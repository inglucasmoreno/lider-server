import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LocalidadDTO {

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Descripcion de la localidad' })
    readonly descripcion: string;

    @ApiProperty({ type: String, description: 'Provincia' })
    readonly provincia: string;
    
    @ApiProperty({ type: Boolean, description: 'Estado de la localidad' })
    readonly activo: boolean; 

}