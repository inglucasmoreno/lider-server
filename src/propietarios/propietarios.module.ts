import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropietariosController } from './propietarios.controller';
import { PropietariosService } from './propietarios.service';
import { propietarioSchema } from './schema/propietario.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Propietario', schema: propietarioSchema}])],
  controllers: [PropietariosController],
  providers: [PropietariosService]
})
export class PropietariosModule {}
