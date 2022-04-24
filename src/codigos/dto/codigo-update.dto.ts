import { ApiProperty } from "@nestjs/swagger";

export class CodigoUpdateDTO {

    @ApiProperty({ type: String, required: true, description: 'Tipo de inmueble' })
    readonly tipo: string;

    @ApiProperty({ type: String, required: true, description: 'Prefijo de codigo' })
    readonly prefijo: string;

    @ApiProperty({ type: Number, required: true, description: 'Numero de codigo' })
    readonly numero: number;

    @ApiProperty({ type: Boolean, default: true, description: 'Estado de propietario' })
    readonly activo: boolean; 

}