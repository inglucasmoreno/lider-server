import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CodigoUpdateDTO } from './dto/codigo-update.dto';
import { CodigoDTO } from './dto/codigo.dto';
import { ICodigo } from './interface/codigo.interface';

@Injectable()
export class CodigosService {

    constructor(@InjectModel('Codigo') private readonly codigoModel: Model<ICodigo>){}
    
    // Codigo por ID
    async getCodigo(id: string): Promise<ICodigo> {
        const codigo = await this.codigoModel.findById(id);
        if(!codigo) throw new NotFoundException('El codigo no existe');
        return codigo;
    }  

    // Codigo por tipo
    async getCodigoPorTipo(tipo: string): Promise<String> {

        let codigo = '';

        const codigoDB = await this.codigoModel.findOne({ tipo });

        if(codigoDB){
            // Se forma el codigo de inmueble
            if(codigoDB.numero < 10) codigo = codigoDB.prefijo + '000' + (codigoDB.numero + 1).toString();
            else if(codigoDB.numero < 99) codigo = codigoDB.prefijo + '00' + (codigoDB.numero + 1).toString();
            else if(codigoDB.numero < 999) codigo = codigoDB.prefijo + '0' + (codigoDB.numero + 1).toString();
            else codigo = codigoDB.prefijo + (codigoDB.numero + 1).toString();
        }else{
            
            let prefijo = '';

            if(tipo === 'Casa') prefijo = 'CA';
            else if(tipo === 'Departamento') prefijo = 'DE';  
            else if(tipo === 'Local comercial') prefijo = 'LC';  
            else if(tipo === 'Monoambiente') prefijo = 'MA';  
            else if(tipo === 'Oficina') prefijo = 'OF';
            else if(tipo === 'Terreno') prefijo = 'TE';
            else if(tipo === 'Campo') prefijo = 'CP';

            codigo = prefijo + '0001'; 
 
        }

        return codigo;
    
    }  

    // Listar codigos
    async listarCodigos(querys: any): Promise<ICodigo[]> {
        
        const {columna, direccion} = querys;

        // Ordenar
        let ordenar = [columna || 'createdAt', direccion || -1];

        const codigos = await this.codigoModel.find()
                                              .sort([ordenar]);
        return codigos;
    }  

    // Crear codigo
    async crearCodigo(codigoDTO: CodigoDTO): Promise<ICodigo> {
        const nuevoCodigo = new this.codigoModel(codigoDTO);
        return await nuevoCodigo.save();
    }

    // Actualizar codigo
    async actualizarCodigo(id: string, codigoUpdateDTO: CodigoUpdateDTO): Promise<ICodigo> {

        // Se verifica si el codigo a actualizar existe
        let codigoDB = await this.getCodigo(id);
        if(!codigoDB) throw new NotFoundException('El codigo no existe');
        
        const codigoRes = await this.codigoModel.findByIdAndUpdate(id, codigoUpdateDTO, {new: true});
        return codigoRes;
        
    }
    
}
