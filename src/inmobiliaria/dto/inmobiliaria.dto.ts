import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InmobiliariaDTO {

    @ApiProperty({ type: String, required: true, description: 'Nombre de imobiliaria' })
    @IsNotEmpty()
    readonly nombre: string;

    @ApiProperty({ type: String, description: 'Logo de inmobiliaria' })
    readonly logo: string;

    @ApiProperty({ type: String, description: 'Descripcion de inmobiliaria' })
    readonly descripcion: string;

    @ApiProperty({ type: String, description: 'Direccion de inmobiliaria' })
    readonly direccion: string;

    @ApiProperty({ type: String, description: 'Telefono de inmobiliaria' })
    readonly telefono: string;

    @ApiProperty({ type: String, description: 'Email de inmobiliaria' })
    readonly email: string;    

    @ApiProperty({ type: String, description: 'Foto principal de inmobiliaria' })
    readonly foto_principal: string;    

    @ApiProperty({ type: Array, description: 'Fotos de inmobiliaria' })
    readonly fotos: Array<string>;

}