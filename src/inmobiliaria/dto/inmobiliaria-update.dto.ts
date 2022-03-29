import { ApiProperty } from "@nestjs/swagger";

export class InmobiliariaUpdateDTO {
    
    @ApiProperty({ type: String, required: true, description: 'Descripcion de inmobiliaria' })
    readonly descripcion: string;
    
    @ApiProperty({ type: String, required: true, description: 'Logo de inmobiliaria' })
    readonly logo: string;
    
    @ApiProperty({ type: Array, required: true, description: 'Fotos de inmobiliaria' })
    readonly fotos: Array<string>;
   
    @ApiProperty({ type: String, description: 'Direccion de inmobiliaria' })
    readonly direccion: string;

    @ApiProperty({ type: String, description: 'Telefono de inmobiliaria' })
    readonly telefono: string;

    @ApiProperty({ type: String, description: 'Email de inmobiliaria' })
    readonly email: string;

}