import { ApiProperty } from "@nestjs/swagger";

export class InmuebleUpdateDTO {
    
    @ApiProperty({ type: String, required: true, description: 'Descripcion corta del inmueble' })
    readonly descripcion_corta: string;
    
    @ApiProperty({ type: String, required: true, description: 'Descripcion completa' })
    readonly descripcion_completa: string;
    
    @ApiProperty({ type: String, required: true, description: 'Codigo de inmueble' })
    readonly codigo: string;
   
    @ApiProperty({ type: String, description: 'Ubicacion del inmueble' })
    readonly ubicacion: string;

    @ApiProperty({ type: String, required: true, description: 'Tipo de inmueble' })
    readonly tipo: string;
    
    @ApiProperty({ type: Boolean, required: true, description: 'Es venta?' })
    readonly venta: boolean;

    @ApiProperty({ type: 'Array', required: true, description: 'Fotos de inmueble' })
    readonly fotos: Array<string>;

    @ApiProperty({ type: Object, required: true, description: 'Es venta?' })
    readonly precio: any;

    @ApiProperty({ type: Boolean, default: true, description: 'Usuario activo o inactivo' })
    readonly activo: boolean;

}