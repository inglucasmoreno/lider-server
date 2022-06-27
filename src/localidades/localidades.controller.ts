import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalidadUpdateDTO } from './dto/localidades-update.dto';
import { LocalidadDTO } from './dto/localidades.dto';
import { LocalidadesService } from './localidades.service';

@ApiTags('localidades')
@Controller('localidades')
export class LocalidadesController {

    constructor( private localidadesService: LocalidadesService ){}

    // Localidad por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Localidad obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de localidad', type: 'string'})
    @Get('/:id')
    async getLocalidad(@Res() res, @Param('id') localidadID) {
        const localidad = await this.localidadesService.getLocalidad(localidadID);
        res.status(HttpStatus.OK).json({
            message: 'Localidades obtenido correctamente',
            localidad
        });
    }

    // Listar localidades
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Listado de localidades correcto' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @Get('/')
    async listarLocalidades(@Res() res, @Query() querys) {
        const localidades = await this.localidadesService.listarLocalidades(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de localidades correcto',
            localidades
        });
    }

    // Listar localidades por provincia
    @ApiOkResponse({ description: 'Listado de localidades correcto' })
    @Get('/param/provincia')
    async listarLocalidadesPorProvincia(@Res() res, @Query() querys) {
        const localidades = await this.localidadesService.listarLocalidadesPorProvincia(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de localidades correcto',
            localidades
        });
    }

    // Crear localidades
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Localidad creada correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: LocalidadDTO })
    @Post('/')
    async crearLocalidad(@Res() res, @Body() localidadDTO: LocalidadDTO ) {       
        const localidad = await this.localidadesService.crearLocalidad(localidadDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Localidad creado correctamente',
            localidad
        });
    }

    // Actualizar localidad
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Localidad actualizado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de localidad', type: 'string'})
    @Put('/:id')
    async actualizarLocalidad(@Res() res, @Body() localidadUpdateDTO: LocalidadUpdateDTO, @Param('id') localidadID ) {
        const localidad = await this.localidadesService.actualizarLocalidad(localidadID, localidadUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Localidad actualizado correctamente',
            localidad
        });
    }
        


}
