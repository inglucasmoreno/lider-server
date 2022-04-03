import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConsultasService } from './consultas.service';
import { ConsultaUpdateDTO } from './dto/consulta-update.dto';
import { ConsultaDTO } from './dto/consulta.dto';

@ApiTags('Consultas')
@Controller('consultas')
export class ConsultasController {

    constructor( private consultasService: ConsultasService ){}

    // Consultas por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Consulta obtenida correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de consulta', type: 'string'})
    @Get('/:id')
    async getConsulta(@Res() res, @Param('id') consultaID) {
        const consulta = await this.consultasService.getConsulta(consultaID);
        res.status(HttpStatus.OK).json({
            message: 'Consulta obtenida correctamente',
            consulta
        });
    }

    // Listar consultas
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Listado de consultas correcto' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @Get('/')
    async listarConsultas(@Res() res, @Query() querys) {
        const consultas = await this.consultasService.listarConsultas(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de consultas correcto',
            consultas
        });
    }

    // Crear consulta
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Consulta creada correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: ConsultaDTO })
    @Post('/')
    async crearConsulta(@Res() res, @Body() consultaDTO: ConsultaDTO ) {       
        const consulta = await this.consultasService.crearConsulta(consultaDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Consulta creada correctamente',
            consulta
        });
    }

    // Actualizar consulta
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Consulta actualizada correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de consulta', type: 'string'})
    @Put('/:id')
    async actualizarConsulta(@Res() res, @Body() consultaUpdateDTO: ConsultaUpdateDTO, @Param('id') consultaID ) {
        const consulta = await this.consultasService.actualizarConsulta(consultaID, consultaUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Consulta actualizada correctamente',
            consulta
        });
    }

}
