import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InmobiliariaController } from './inmobiliaria.controller';
import { InmobiliariaService } from './inmobiliaria.service';
import { inmobiliariaSchema } from './schema/inmobiliaria.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Inmobiliaria', schema: inmobiliariaSchema}])],
  controllers: [InmobiliariaController],
  providers: [InmobiliariaService]
})
export class InmobiliariaModule {}
