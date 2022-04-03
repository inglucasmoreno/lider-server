import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropietarioUpdateDTO } from './dto/propietario-update.dto';
import { PropietarioDTO } from './dto/propietario.dto';
import { IPropietario } from './interface/propietario.interface';

@Injectable()
export class PropietariosService {

    constructor(@InjectModel('Propietario') private readonly propietarioModel: Model<IPropietario>){}
    
    // Propietario por ID
    async getPropietario(id: string): Promise<IPropietario> {
        const propietario = await this.propietarioModel.findById(id);
        if(!propietario) throw new NotFoundException('El propietario no existe');
        return propietario;
    }  

    // Listar propietarios
    async listarPropietarios(querys: any): Promise<IPropietario[]> {
        
        const {columna, direccion} = querys;

        // Ordenar
        let ordenar = [columna || 'descripcion', direccion || 1];

        const propietarios = await this.propietarioModel.find()
                                                   .sort([ordenar]);
        return propietarios;
    }  

    // Crear propietario
    async crearPropietario(propietarioDTO: PropietarioDTO): Promise<IPropietario> {
        const nuevoPropietario = new this.propietarioModel(propietarioDTO);
        return await nuevoPropietario.save();
    }

    // Actualizar propietario
    async actualizarPropietario(id: string, propietarioUpdateDTO: PropietarioUpdateDTO): Promise<IPropietario> {

        // Se verifica si el propietario a actualizar existe
        let propietarioDB = await this.getPropietario(id);
        if(!propietarioDB) throw new NotFoundException('El propietario no existe');
        
        const propietarioRes = await this.propietarioModel.findByIdAndUpdate(id, propietarioUpdateDTO, {new: true});
        return propietarioRes;
        
    }

}
