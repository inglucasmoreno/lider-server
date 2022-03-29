import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InmuebleUpdateDTO } from './dto/inmuebles-update.dto';
import { InmuebleDTO } from './dto/inmuebles.dto';

import { IInmueble } from './interface/inmuebles.interface';

@Injectable()
export class InmueblesService {

    constructor(@InjectModel('Inmueble') private readonly inmuebleModel: Model<IInmueble>){}
    
    // Inmueble por ID
    async getInmueble(id: string): Promise<IInmueble> {
        const inmueble = await this.inmuebleModel.findById(id);
        if(!inmueble) throw new NotFoundException('El inmueble no existe');
        return inmueble;
    }  

    // Inmueble por codigo
    async getInmueblePorCodigo(codigo: string): Promise<IInmueble> {
        const inmueble = await this.inmuebleModel.findOne({ codigo });
        if(!inmueble) throw new NotFoundException('El inmueble no existe');
        return inmueble;
    }  

    // Listar inmuebles
    async listarInmuebles(querys: any): Promise<IInmueble[]> {
        
        const {columna, direccion} = querys;

        // Ordenar
        let ordenar = [columna || 'codigo', direccion || 1];

        const inmuebles = await this.inmuebleModel.find()
                                                   .sort([ordenar]);
        return inmuebles;
    }  

    // Crear inmueble
    async crearInmueble(inmuebleDTO: InmuebleDTO): Promise<IInmueble> {
        const nuevoInmueble = new this.inmuebleModel(inmuebleDTO);
        return await nuevoInmueble.save();
    }

    // Actualizar inmueble
    async actualizarInmueble(id: string, inmuebleUpdateDTO: InmuebleUpdateDTO): Promise<IInmueble> {

        // Se verifica si el inmueble a actualizar existe
        let inmuebleDB = await this.getInmueble(id);
        if(!inmuebleDB) throw new NotFoundException('El inmueble no existe');
        
        const inmuebleRes = await this.inmuebleModel.findByIdAndUpdate(id, inmuebleUpdateDTO, {new: true});
        return inmuebleRes;
        
    }


}
