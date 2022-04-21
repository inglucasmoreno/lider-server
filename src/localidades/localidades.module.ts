import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalidadesController } from './localidades.controller';
import { LocalidadesService } from './localidades.service';
import { localidadSchema } from './schema/localidades.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Localidad', schema: localidadSchema}])],
  controllers: [LocalidadesController],
  providers: [LocalidadesService]
})
export class LocalidadesModule {}
