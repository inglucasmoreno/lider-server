import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultasController } from './consultas.controller';
import { ConsultasService } from './consultas.service';
import { consultaSchema } from './schema/consulta.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Consulta', schema: consultaSchema}])],
  controllers: [ConsultasController],
  providers: [ConsultasService]
})
export class ConsultasModule {}
