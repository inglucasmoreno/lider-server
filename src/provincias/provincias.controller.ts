import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProvinciaUpdateDTO } from './dto/provincia-update.dto';
import { ProvinciaDTO } from './dto/provincia.dto';
import { ProvinciasService } from './provincias.service';

@ApiTags('Provincias')
@Controller('provincias')
export class ProvinciasController {

    constructor( private provinciasService: ProvinciasService ){}

    // Provincia por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Provincia obtenida correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de provincia', type: 'string'})
    @Get('/:id')
    async getProvincia(@Res() res, @Param('id') provinciaID) {
        const provincia = await this.provinciasService.getProvincia(provinciaID);
        res.status(HttpStatus.OK).json({
            message: 'Provincia obtenida correctamente',
            provincia
        });
    }

    // Listar provincias
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Listado de provincias correcto' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @Get('/')
    async listarProvincias(@Res() res, @Query() querys) {
        const provincias = await this.provinciasService.listarProvincias(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de provincias correcto',
            provincias
        });
    }

    // Crear provincia
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Provincia creada correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: ProvinciaDTO })
    @Post('/')
    async crearProvincia(@Res() res, @Body() provinciaDTO: ProvinciaDTO ) {       
        const provincia = await this.provinciasService.crearProvincia(provinciaDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Provincia creada correctamente',
            provincia
        });
    }

    // Actualizar provincia
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Provincia actualizada correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de provincia', type: 'string'})
    @Put('/:id')
    async actualizarProvincia(@Res() res, @Body() provinciaUpdateDTO: ProvinciaUpdateDTO, @Param('id') provinciaID ) {
        const provincia = await this.provinciasService.actualizarProvincia(provinciaID, provinciaUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Provincia actualizada correctamente',
            provincia
        });
    }

}
