import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class InmuebleDTO {
    
    @ApiProperty({ type: String, required: true, description: 'Descripcion corta del inmueble' })
    @IsNotEmpty()
    readonly descripcion_corta: string;
    
    @ApiProperty({ type: String, required: true, description: 'Descripcion completa' })
    @IsNotEmpty()
    readonly descripcion_completa: string;
    
    @IsNotEmpty()
    @ApiProperty({ type: String, required: true, description: 'Codigo de inmueble' })
    readonly codigo: string;
   
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Ubicacion del inmueble' })
    readonly ubicacion: string;

    @ApiProperty({ type: String, required: true, description: 'Tipo de inmueble' })
    readonly tipo: string;
    
    @ApiProperty({ type: Boolean, required: true, description: 'Es venta?' })
    readonly venta: boolean;

    @ApiProperty({ type: 'Array', required: true, description: 'Fotos de inmueble' })
    readonly fotos: Array<string>;

    @ApiProperty({ type: Object, required: true, description: 'Es venta?' })
    readonly precio: Object;

    @ApiProperty({ type: Boolean, default: true, description: 'Usuario activo o inactivo' })
    readonly activo: boolean;

}