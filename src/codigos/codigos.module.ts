import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CodigosController } from './codigos.controller';
import { CodigosService } from './codigos.service';
import { codigoSchema } from './schema/codigo.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Codigo', schema: codigoSchema}])],
  controllers: [CodigosController],
  providers: [CodigosService]
})
export class CodigosModule {}
