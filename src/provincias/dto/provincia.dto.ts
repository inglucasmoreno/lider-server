import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ProvinciaDTO {

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Descripcion de provincia' })
    readonly descripcion: string;
    
    @ApiProperty({ type: Boolean, description: 'Estado de provincia' })
    readonly activo: boolean;

}