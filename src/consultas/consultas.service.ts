import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsultaUpdateDTO } from './dto/consulta-update.dto';
import { ConsultaDTO } from './dto/consulta.dto';
import { IConsulta } from './interface/consulta.interface';

@Injectable()
export class ConsultasService {

    constructor(@InjectModel('Consulta') private readonly consultaModel: Model<IConsulta>){}
    
    // Consulta por ID
    async getConsulta(id: string): Promise<IConsulta> {
        const consulta = await this.consultaModel.findById(id);
        if(!consulta) throw new NotFoundException('La consulta no existe');
        return consulta;
    }  

    // Listar consultas
    async listarConsultas(querys: any): Promise<IConsulta[]> {
        
        const {columna, direccion} = querys;

        // Ordenar
        let ordenar = [columna || 'createdAt', direccion || -1];

        const consultas = await this.consultaModel.find()
                                                   .sort([ordenar]);
        return consultas;
    }  

    // Crear consulta
    async crearConsulta(consultaDTO: ConsultaDTO): Promise<IConsulta> {
        const nuevaConsulta = new this.consultaModel(consultaDTO);
        return await nuevaConsulta.save();
    }

    // Actualizar consulta
    async actualizarConsulta(id: string, consultaUpdateDTO: ConsultaUpdateDTO): Promise<IConsulta> {

        // Se verifica si la consulta a actualizar existe
        let consultaDB = await this.getConsulta(id);
        if(!consultaDB) throw new NotFoundException('La consulta no existe');
        
        const consultaRes = await this.consultaModel.findByIdAndUpdate(id, consultaUpdateDTO, {new: true});
        return consultaRes;
        
    }
    
}
