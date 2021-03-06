import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { MongoModule } from './config/mongo.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { InicializacionModule } from './inicializacion/inicializacion.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SocketModule } from './socket/socket.module';
import { ConfigModule } from '@nestjs/config';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { InmobiliariaModule } from './inmobiliaria/inmobiliaria.module';
import { PropietariosModule } from './propietarios/propietarios.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { ConsultasModule } from './consultas/consultas.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { CodigosModule } from './codigos/codigos.module';

@Module({
  imports: [
      
    // Directorio publico
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  
    // Configuracion para variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  
    // Configuracion para JsonWebToken
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '12h' }
    }),
    
    // MongoDB
    MongoModule,
    
    // Modulos custom
    UsuariosModule, 
    AuthModule,
    InicializacionModule,  // Para inicializacion de tablas - Configurable en el controlador/servicio
    SocketModule, InmueblesModule, InmobiliariaModule, PropietariosModule, ProvinciasModule, ConsultasModule, LocalidadesModule, CodigosModule,          // Para trabajar con WebSocket
    
  ],
  
  controllers: [AppController],
  
  providers: [AppService]

})
export class AppModule {}
