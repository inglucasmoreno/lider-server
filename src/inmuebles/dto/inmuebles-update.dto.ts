import { ApiProperty } from "@nestjs/swagger";

export class InmuebleUpdateDTO {
    
    @ApiProperty({ type: String, description: 'Propietario del inmueble' })
    readonly propietario: string;

    @ApiProperty({ type: String, description: 'Provincia en la que se encuentra el inmueble' })
    readonly provincia: string;

    @ApiProperty({ type: String, description: 'Codigo de inmueble' })
    readonly codigo: string;

    @ApiProperty({ type: String, description: 'Descripcion corta del inmueble' })
    readonly descripcion_corta: string;
    
    @ApiProperty({ type: String, description: 'Descripcion completa' })
    readonly descripcion_completa: string;
    
    @ApiProperty({ type: String, description: 'Ubicacion publica del inmueble' })
    readonly ubicacion_publica: string;

    @ApiProperty({ type: String, description: 'Ubicacion privada del inmueble' })
    readonly ubicacion_privada: string;

    @ApiProperty({ type: String, description: 'Tipo de inmueble' })
    readonly tipo: string;

    @ApiProperty({ type: String, description: 'Foto principal del inmueble' })
    readonly foto_principal: string;

    @ApiProperty({ type: 'Array', description: 'Fotos de inmueble' })
    readonly fotos: Array<string>;
    
    @ApiProperty({ type: Boolean, description: 'Es venta?' })
    readonly venta: boolean;

    @ApiProperty({ type: Boolean, description: 'Mostrar el precio de forma publica?' })
    readonly precio_mostrar: boolean;

    @ApiProperty({ type: Boolean, description: 'ARG o Dolares?' })
    readonly precio_dolar: boolean;

    @ApiProperty({ type: Number, description: 'Precio del inmueble' })
    readonly precio_valor: number;

    @ApiProperty({ type: Boolean, description: 'Usuario activo o inactivo' })
    readonly activo: boolean;

}