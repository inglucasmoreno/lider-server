import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InmuebleUpdateDTO } from './dto/inmuebles-update.dto';
import { InmuebleDTO } from './dto/inmuebles.dto';
import { InmueblesService } from './inmuebles.service';

@ApiTags('Inmuebles')
@Controller('inmuebles')
export class InmueblesController {


    constructor( private inmueblesService: InmueblesService ){}

    // Inmueble por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Inmueble obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de inmueble', type: 'string'})
    @Get('/:id')
    async getInmueble(@Res() res, @Param('id') inmuebleID) {
        const inmueble = await this.inmueblesService.getInmueble(inmuebleID);
        res.status(HttpStatus.OK).json({
            message: 'Inmueble obtenido correctamente',
            inmueble
        });
    }

    // Inmueble por codigo
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Inmueble obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'codigo', required: true, description: 'Codigo de inmueble', type: 'string'})
    @Get('/codigo/:codigo')
    async getInmueblePorCodigo(@Res() res, @Param('codigo') codigoInmueble) {
        const inmueble = await this.inmueblesService.getInmueblePorCodigo(codigoInmueble);
        res.status(HttpStatus.OK).json({
            message: 'Inmueble obtenido correctamente',
            inmueble
        });
    }

    // Listar inmuebles
    @ApiOkResponse({ description: 'Listado de inmuebles correcto' })
    @Get('/')
    async listarInmuebles(@Res() res, @Query() querys) {
        const inmuebles = await this.inmueblesService.listarInmuebles(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de inmuebles correcto',
            inmuebles
        });
    }

    // Crear inmueble
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Inmueble creado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: InmuebleDTO })
    @Post('/')
    async crearInmueble(@Res() res, @Body() inmuebleDTO: InmuebleDTO ) {    
        console.log(inmuebleDTO);   
        const inmueble = await this.inmueblesService.crearInmueble(inmuebleDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Inmueble creado correctamente',
            inmueble
        });
    }

    // Actualizar inmueble
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Inmueble actualizado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de inmueble', type: 'string'})
    @Put('/:id')
    async actualizarInmueble(@Res() res, @Body() inmuebleUpdateDTO: InmuebleUpdateDTO, @Param('id') inmuebleID ) {
        const inmueble = await this.inmueblesService.actualizarInmueble(inmuebleID, inmuebleUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Inmueble actualizado correctamente',
            inmueble
        });
    }

}
