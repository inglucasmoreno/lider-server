import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CodigosService } from './codigos.service';
import { CodigoUpdateDTO } from './dto/codigo-update.dto';
import { CodigoDTO } from './dto/codigo.dto';

@ApiTags('codigos')
@Controller('codigos')
export class CodigosController {
    constructor( private codigosService: CodigosService ){}

    // Codigos por ID
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Codigo obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de codigo', type: 'string'})
    @Get('/:id')
    async getCodigo(@Res() res, @Param('id') codigoID) {
        const codigo = await this.codigosService.getCodigo(codigoID);
        res.status(HttpStatus.OK).json({
            message: 'Codigo obtenido correctamente',
            codigo
        });
    }

    // Codigos por tipo
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Codigo obtenido correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'tipo', required: true, description: 'Tipo de inmueble', type: 'string'})
    @Get('/tipo/:tipo')
    async getCodigoPorTipo(@Res() res, @Param('tipo') tipo) {
        const codigo = await this.codigosService.getCodigoPorTipo(tipo);
        res.status(HttpStatus.OK).json({
            message: 'Codigo obtenido correctamente',
            codigo
        });
    }

    // Listar codigos
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Listado de codigos correcto' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @Get('/')
    async listarCodigos(@Res() res, @Query() querys) {
        const codigos = await this.codigosService.listarCodigos(querys);
        res.status(HttpStatus.OK).json({
            message: 'Listado de codigos correcto',
            codigos
        });
    }

    // Crear codigo
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: 'Codigo creado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiBody({ type: CodigoDTO })
    @Post('/')
    async crearCodigo(@Res() res, @Body() codigoDTO: CodigoDTO ) {       
        const codigo = await this.codigosService.crearCodigo(codigoDTO);        
        res.status(HttpStatus.CREATED).json({
            message: 'Codigo creado correctamente',
            codigo
        });
    }

    // Actualizar codigo
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'Codigo actualizado correctamente' })
    @ApiUnauthorizedResponse({ description: 'El usuario no esta autorizado para realizar esta accion' })
    @ApiParam({name: 'id', required: true, description: 'Identificador de codigo', type: 'string'})
    @Put('/:id')
    async actualizarCodigo(@Res() res, @Body() codigoUpdateDTO: CodigoUpdateDTO, @Param('id') codigoID ) {
        const codigo = await this.codigosService.actualizarCodigo(codigoID, codigoUpdateDTO);
        res.status(HttpStatus.OK).json({
            message: 'Codigo actualizado correctamente',
            codigo
        });
    }
    
}
