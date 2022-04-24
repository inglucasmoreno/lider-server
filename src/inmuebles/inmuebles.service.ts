import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose  from 'mongoose';
import { Model } from 'mongoose';
import { ICodigo } from 'src/codigos/interface/codigo.interface';
import { InmuebleUpdateDTO } from './dto/inmuebles-update.dto';
import { InmuebleDTO } from './dto/inmuebles.dto';

import { IInmueble } from './interface/inmuebles.interface';

@Injectable()
export class InmueblesService {

    constructor(
        @InjectModel('Inmueble') private readonly inmuebleModel: Model<IInmueble>,
        @InjectModel('Codigo') private readonly codigoModel: Model<ICodigo>      
    ){}
    
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

        // Informacion de localidad
        pipeline.push({
            $lookup: {
                from: 'localidades',
                localField: 'localidad',
                foreignField: '_id',
                as: 'localidad'
            }
        });

        pipeline.push({$unwind: '$localidad'}); 

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

        // Informacion de provincia
        pipeline.push({
            $lookup: {
                from: 'localidades',
                localField: 'localidad',
                foreignField: '_id',
                as: 'localidad'
            }
        });
        
        pipeline.push({$unwind: '$localidad'});

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

        const { tipo } = inmuebleDTO;

        let codigo = '';

        // Generacion de codigo
        const codigoDB = await this.codigoModel.findOne({ tipo });
        
        if(!codigoDB){ // Si no existe el codigo se crea
                     
            let prefijo = '';

            if(tipo === 'Casa') prefijo = 'CA';
            else if(tipo === 'Departamento') prefijo = 'DE';  
            else if(tipo === 'Local comercial') prefijo = 'LC';  
            else if(tipo === 'Monoambiente') prefijo = 'MA';  
            else if(tipo === 'Oficina') prefijo = 'OF';
            else if(tipo === 'Terreno') prefijo = 'TE';
            else if(tipo === 'Campo') prefijo = 'CP';

            const nuevoCodigo = new this.codigoModel({
                tipo,
                prefijo,
                numero: 1
            });

            await nuevoCodigo.save();
            
            codigo = prefijo + '0001'; 

        }else{
            
            // Se forma el codigo de inmueble
            if(codigoDB.numero < 10) codigo = codigoDB.prefijo + '000' + (codigoDB.numero + 1).toString();
            else if(codigoDB.numero < 99) codigo = codigoDB.prefijo + '00' + (codigoDB.numero + 1).toString();
            else if(codigoDB.numero < 999) codigo = codigoDB.prefijo + '0' + (codigoDB.numero + 1).toString();
            else codigo = codigoDB.prefijo + (codigoDB.numero + 1).toString();

            // Actualizacion de codigo
            await this.codigoModel.findByIdAndUpdate(codigoDB._id, { numero: codigoDB.numero + 1 });

        }

        const data = { ...inmuebleDTO, codigo };

        const nuevoInmueble = new this.inmuebleModel(data);
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
