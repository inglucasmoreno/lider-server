import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose  from 'mongoose';
import { Model } from 'mongoose';
import { InmuebleUpdateDTO } from './dto/inmuebles-update.dto';
import { InmuebleDTO } from './dto/inmuebles.dto';

import { IInmueble } from './interface/inmuebles.interface';

@Injectable()
export class InmueblesService {

    constructor(@InjectModel('Inmueble') private readonly inmuebleModel: Model<IInmueble>){}
    
    // Inmueble por ID
    async getInmueble(id: string): Promise<any> {

        const pipeline = [];

        // Filtramos por ID
        const idInmueble = new mongoose.Types.ObjectId(id);
        pipeline.push({$match:{ _id: idInmueble }});

        // Informacion de propietario
        pipeline.push({
            $lookup: { // Lookup - Propietario
                from: 'propietarios',
                localField: 'propietario',
                foreignField: '_id',
                as: 'propietario'
            }}
        );

        pipeline.push({ $unwind: '$propietario' });

        // Informacion de provincia
        pipeline.push({
            $lookup: {
                from: 'provincias',
                localField: 'provincia',
                foreignField: '_id',
                as: 'provincia'
            }
        });

        pipeline.push({$unwind: '$provincia'}); 

        const inmueble = await this.inmuebleModel.aggregate(pipeline);

        return inmueble;

    }  

    // Inmueble por codigo
    async getInmueblePorCodigo(codigo: string): Promise<any> {

        const pipeline = [];

        // Filtramos por codigo
        pipeline.push({$match:{ codigo }});

        // Informacion de propietario
        pipeline.push({
            $lookup: { // Lookup - Propietario
                from: 'propietarios',
                localField: 'propietario',
                foreignField: '_id',
                as: 'propietario'
            }}
        );

        pipeline.push({ $unwind: '$propietario' });

        // Informacion de provincia
        pipeline.push({
            $lookup: {
                from: 'provincias',
                localField: 'provincia',
                foreignField: '_id',
                as: 'provincia'
            }
        });

        pipeline.push({$unwind: '$provincia'}); 

        const inmueble = await this.inmuebleModel.aggregate(pipeline);

        return inmueble;

    }  

    // Listar inmuebles
    async listarInmuebles(querys: any): Promise<IInmueble[]> {
        
        const { columna, direccion } = querys;

        const pipeline = [];

        pipeline.push({$match:{ }});

        // Informacion de propietario
        pipeline.push({
            $lookup: { // Lookup - Propietario
                from: 'propietarios',
                localField: 'propietario',
                foreignField: '_id',
                as: 'propietario'
            }}
        );

        pipeline.push({ $unwind: '$propietario' });

        // Informacion de provincia
        pipeline.push({
            $lookup: {
                from: 'provincias',
                localField: 'provincia',
                foreignField: '_id',
                as: 'provincia'
            }
        });

        pipeline.push({$unwind: '$provincia'});

        // Ordenando datos
        const ordenar: any = {};
        if(columna){
            ordenar[String(columna)] = Number(direccion);
            pipeline.push({$sort: ordenar});
        }

        const inmuebles = await this.inmuebleModel.aggregate(pipeline);

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
