import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocalidadUpdateDTO } from './dto/localidades-update.dto';
import { LocalidadDTO } from './dto/localidades.dto';
import { ILocalidad } from './interface/localidades.interface';

@Injectable()
export class LocalidadesService {

    constructor(@InjectModel('Localidad') private readonly localidadModel: Model<ILocalidad>){}
    
    // Localidad por ID
    async getLocalidad(id: string): Promise<ILocalidad> {
        const localidad = await this.localidadModel.findById(id);
        if(!localidad) throw new NotFoundException('La localidad no existe');
        return localidad;
    }  

    // Listar localidades
    async listarLocalidades(querys: any): Promise<ILocalidad[]> {
        
        const {columna, direccion} = querys;

        // Ordenar
        let ordenar = [columna || 'descripcion', direccion || 1];

        const localidades = await this.localidadModel.find()
                                                     .sort([ordenar]);
        return localidades;
    }
    
    // Listar localidades por provincia
    async listarLocalidadesPorProvincia(querys: any): Promise<ILocalidad[]> {
        
        const {columna, direccion, provincia} = querys;

        // Ordenar
        let ordenar = [columna || 'descripcion', direccion || 1];

        const localidades = await this.localidadModel.find({ provincia })
                                                     .sort([ordenar]);
        return localidades;
    }

    // Crear localidades
    async crearLocalidad(localidadDTO: LocalidadDTO): Promise<ILocalidad> {
        const nuevaLocalidad = new this.localidadModel(localidadDTO);
        return await nuevaLocalidad.save();
    }

    // Actualizar localidad
    async actualizarLocalidad(id: string, localidadUpdateDTO: LocalidadUpdateDTO): Promise<ILocalidad> {

        // Se verifica si la localidad a actualizar existe
        let localidadDB = await this.getLocalidad(id);
        if(!localidadDB) throw new NotFoundException('La localidad no existe');
        
        const localidadRes = await this.localidadModel.findByIdAndUpdate(id, localidadUpdateDTO, {new: true});
        return localidadRes;
        
    }



}
