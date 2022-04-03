import { ApiProperty } from "@nestjs/swagger";

export class ProvinciaUpdateDTO {

    @ApiProperty({ type: String, description: 'Descripcion de provincia' })
    readonly descripcion: string;
    
    @ApiProperty({ type: Boolean, description: 'Estado de provincia' })
    readonly activo: boolean;

}