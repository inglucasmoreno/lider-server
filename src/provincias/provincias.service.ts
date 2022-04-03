import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProvinciaUpdateDTO } from './dto/provincia-update.dto';
import { ProvinciaDTO } from './dto/provincia.dto';
import { IProvincia } from './interface/provincia.interface';

@Injectable()
export class ProvinciasService {

    constructor(@InjectModel('Provincia') private readonly provinciaModel: Model<IProvincia>){}
    
    // Provincia por ID
    async getProvincia(id: string): Promise<IProvincia> {
        const provincia = await this.provinciaModel.findById(id);
        if(!provincia) throw new NotFoundException('La provincia no existe');
        return provincia;
    }  

    // Listar provincias
    async listarProvincias(querys: any): Promise<IProvincia[]> {
        
        const {columna, direccion} = querys;

        // Ordenar
        let ordenar = [columna || 'descripcion', direccion || 1];

        const provincias = await this.provinciaModel.find()
                                                   .sort([ordenar]);
        return provincias;
    }  

    // Crear provincia
    async crearProvincia(provinciaDTO: ProvinciaDTO): Promise<IProvincia> {
        const nuevaProvincia = new this.provinciaModel(provinciaDTO);
        return await nuevaProvincia.save();
    }

    // Actualizar provincia
    async actualizarProvincia(id: string, provinciaUpdateDTO: ProvinciaUpdateDTO): Promise<IProvincia> {

        // Se verifica si la provincia a actualizar existe
        let provinciaDB = await this.getProvincia(id);
        if(!provinciaDB) throw new NotFoundException('La provincia no existe');
        
        const provinciaRes = await this.provinciaModel.findByIdAndUpdate(id, provinciaUpdateDTO, {new: true});
        return provinciaRes;
        
    } 

}
