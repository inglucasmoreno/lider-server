import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { codigoSchema } from 'src/codigos/schema/codigo.schema';
import { InmueblesController } from './inmuebles.controller';
import { InmueblesService } from './inmuebles.service';
import { inmuebleSchema } from './schema/inmuebles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Inmueble', schema: inmuebleSchema}]),
    MongooseModule.forFeature([{name: 'Codigo', schema: codigoSchema}]),
  ],
  controllers: [InmueblesController],
  providers: [InmueblesService]
})
export class InmueblesModule {}
