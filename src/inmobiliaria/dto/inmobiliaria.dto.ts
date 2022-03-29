import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InmobiliariaDTO {
    
    @ApiProperty({ type: String, required: true, description: 'Descripcion de inmobiliaria' })
    @IsNotEmpty()
    readonly descripcion: string;
    
    @ApiProperty({ type: String, required: true, description: 'Logo de inmobiliaria' })
    @IsNotEmpty()
    readonly logo: string;
    
    @IsNotEmpty()
    @ApiProperty({ type: Array, required: true, description: 'Fotos de inmobiliaria' })
    readonly fotos: Array<string>;
   
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Direccion de inmobiliaria' })
    readonly direccion: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Telefono de inmobiliaria' })
    readonly telefono: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Email de inmobiliaria' })
    readonly email: string;

}