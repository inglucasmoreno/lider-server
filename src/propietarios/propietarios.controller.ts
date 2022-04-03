import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PropietarioUpdateDTO } from './dto/propietario-update.dto';
import { PropietarioDTO } from './dto/propietario.dto';
import { PropietariosService } from './propietarios.service';

@ApiTags('Propietarios')
@Controller('propietarios')
export class PropietariosController {

    constructor( private propietariosService: PropietariosService ){}

    // Propietario por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Propietario obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de propietario', type: 'string'})
    @Get('/:id')
    async getPropietario(@Res() res, @Param('id') propietarioID) {
        const propietario = await this.propietariosService.getPropietario(propietarioID);
        res.status(HttpStatus.OK).json({
            message: 'Propietario obtenido correctamente',
            propietario
        });
    }

    // Listar propietarios
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Listado de propietarios correcto' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @Get('/')
    async listarPropietarios(@Res() res, @Query() querys) {
        const propietarios = await this.propietariosService.listarPropietarios(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de propietarios correcto',
            propietarios
        });
    }

    // Crear propietario
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Propietario creado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: PropietarioDTO })
    @Post('/')
    async crearPropietario(@Res() res, @Body() propietarioDTO: PropietarioDTO ) {       
        const propietario = await this.propietariosService.crearPropietario(propietarioDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Propietario creado correctamente',
            propietario
        });
    }

    // Actualizar propietario
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Propietario actualizado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de propietario', type: 'string'})
    @Put('/:id')
    async actualizarPropietario(@Res() res, @Body() propietarioUpdateDTO: PropietarioUpdateDTO, @Param('id') propietarioID ) {
        const propietario = await this.propietariosService.actualizarPropietario(propietarioID, propietarioUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Propietario actualizado correctamente',
            propietario
        });
    }

}
