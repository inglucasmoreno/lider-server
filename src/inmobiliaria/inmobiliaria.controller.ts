import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InmobiliariaUpdateDTO } from './dto/inmobiliaria-update.dto';
import { InmobiliariaDTO } from './dto/inmobiliaria.dto';
import { InmobiliariaService } from './inmobiliaria.service';

@ApiTags('Inmobiliaria')
@Controller('inmobiliaria')
export class InmobiliariaController {

    constructor( private inmobiliariasService: InmobiliariaService ){}

    // Inmobiliaria por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Inmobiliaria obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de inmobiliaria', type: 'string'})
    @Get('/:id')
    async getInmobiliaria(@Res() res, @Param('id') inmobiliariaID) {
        const inmobiliaria = await this.inmobiliariasService.getInmobiliaria(inmobiliariaID);
        res.status(HttpStatus.OK).json({
            message: 'Inmobiliaria obtenido correctamente',
            inmobiliaria
        });
    }

    // Listar inmobiliarias
    @ApiOkResponse({ description: 'Listado de inmobiliarias correcto' })
    @Get('/')
    async listarInmobiliarias(@Res() res, @Query() querys) {
        const inmobiliarias = await this.inmobiliariasService.listarInmobiliarias(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de inmobiliarias correcto',
            inmobiliarias
        });
    }

    // Crear inmobiliaria
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Inmobiliaria creada correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: InmobiliariaDTO })
    @Post('/')
    async crearInmobiliaria(@Res() res, @Body() inmobiliariaDTO: InmobiliariaDTO ) {       
        const inmobiliaria = await this.inmobiliariasService.crearInmobiliaria(inmobiliariaDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Inmobiliaria creado correctamente',
            inmobiliaria
        });
    }

    // Actualizar inmobiliaria
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Inmobiliaria actualizado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de inmobiliaria', type: 'string'})
    @Put('/:id')
    async actualizarInmobiliaria(@Res() res, @Body() inmobiliariaUpdateDTO: InmobiliariaUpdateDTO, @Param('id') inmobiliariaID ) {
        const inmobiliaria = await this.inmobiliariasService.actualizarInmobiliaria(inmobiliariaID, inmobiliariaUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Inmobiliaria actualizado correctamente',
            inmobiliaria
        });
    }
}
