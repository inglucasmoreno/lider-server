import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CodigoDTO {

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Tipo de inmueble' })
    readonly tipo: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Prefijo de codigo' })
    readonly prefijo: string;

    @IsNotEmpty()
    @ApiProperty({ type: Number, required: true, description: 'Numero de codigo' })
    readonly numero: number;

    @ApiProperty({ type: Boolean, default: true, description: 'Estado de propietario' })
    readonly activo: boolean; 

}