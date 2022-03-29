import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InmobiliariaUpdateDTO } from './dto/inmobiliaria-update.dto';
import { InmobiliariaDTO } from './dto/inmobiliaria.dto';
import { IInmobiliaria } from './interface/inmobiliario.interface';

@Injectable()
export class InmobiliariaService {
    
    constructor(@InjectModel('Inmobiliaria') private readonly inmobiliariaModel: Model<IInmobiliaria>){}
    
    // Inmobiliaria por ID
    async getInmobiliaria(id: string): Promise<IInmobiliaria> {
        const inmobiliaria = await this.inmobiliariaModel.findById(id);
        if(!inmobiliaria) throw new NotFoundException('La inmobiliaria no existe');
        return inmobiliaria;
    }  

    // Listar inmobiliarias
    async listarInmobiliarias(querys: any): Promise<IInmobiliaria[]> {     
        const {columna, direccion} = querys;
        const inmobiliarias = await this.inmobiliariaModel.find();
        return inmobiliarias;
    }  

    // Crear inmobiliaria
    async crearInmobiliaria(inmobiliariaDTO: InmobiliariaDTO): Promise<IInmobiliaria> {
        const nuevaInmobiliaria = new this.inmobiliariaModel(inmobiliariaDTO);
        return await nuevaInmobiliaria.save();
    }

    // Actualizar inmobiliaria
    async actualizarInmobiliaria(id: string, inmobiliariaUpdateDTO: InmobiliariaUpdateDTO): Promise<IInmobiliaria> {
        let inmobiliariaDB = await this.getInmobiliaria(id);
        if(!inmobiliariaDB) throw new NotFoundException('La inmobiliaria no existe');       
        const inmobiliariaRes = await this.inmobiliariaModel.findByIdAndUpdate(id, inmobiliariaUpdateDTO, {new: true});
        return inmobiliariaRes;   
    }

}
