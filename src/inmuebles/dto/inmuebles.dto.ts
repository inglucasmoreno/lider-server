import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InmuebleDTO {

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Propietario del inmueble' })
    readonly propietario: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Provincia en la que se encuentra el inmueble' })
    readonly provincia: string;

    @ApiProperty({ type: String, description: 'Codigo de inmueble' })
    readonly codigo: string;

    @ApiProperty({ type: String, default: '', description: 'Descripcion corta del inmueble' })
    readonly descripcion_corta: string;
    
    @ApiProperty({ type: String, default: '', description: 'Descripcion completa' })
    readonly descripcion_completa: string;
    
    @ApiProperty({ type: String, default: '', description: 'Ubicacion publica del inmueble' })
    readonly ubicacion_publica: string;

    @ApiProperty({ type: String, default: '', description: 'Ubicacion privada del inmueble' })
    readonly ubicacion_privada: string;

    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Tipo de inmueble' })
    readonly tipo: string;

    @ApiProperty({ type: String, default: '', description: 'Foto principal del inmueble' })
    readonly foto_principal: string;

    @ApiProperty({ type: 'Array', default: [], description: 'Fotos de inmueble' })
    readonly fotos: Array<string>;
    
    @IsNotEmpty()
    @ApiProperty({ type: Boolean, required: true, description: 'Es venta?' })
    readonly venta: boolean;

    @ApiProperty({ type: Boolean, default: true, description: 'Mostrar el precio de forma publica?' })
    readonly precio_mostrar: boolean;

    @ApiProperty({ type: Boolean, default: false, description: 'ARG o Dolares?' })
    readonly precio_dolar: boolean;

    @ApiProperty({ type: Number, required: true, description: 'Precio del inmueble' })
    readonly precio_valor: number;

    @ApiProperty({ type: Boolean, default: true, description: 'Usuario activo o inactivo' })
    readonly activo: boolean;

}