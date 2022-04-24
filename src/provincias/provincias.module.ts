import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { localidadSchema } from 'src/localidades/schema/localidades.schema';
import { ProvinciasController } from './provincias.controller';
import { ProvinciasService } from './provincias.service';
import { provinciaSchema } from './schema/provincia.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Provincia', schema: provinciaSchema}]),
    MongooseModule.forFeature([{name: 'Localidad', schema: localidadSchema}])
  ],
  controllers: [ProvinciasController],
  providers: [ProvinciasService]
})
export class ProvinciasModule {}
