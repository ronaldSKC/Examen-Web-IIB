import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './actor/actor.entity';
import { ActorModule } from './actor/actor.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { PeliculaEntity } from './pelicula/pelicula.entity';
import { EventoModule } from './evento/evento.module';
import { EventoEntity } from './evento/evento.entity';
import { EventoPeliculaModule } from './evento-pelicula/evento.module';
import { EventoPeliculaEntity } from './evento-pelicula/evento.entity';
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Module({
  imports: [
    ActorModule,
    PeliculaModule,
    EventoModule,
    EventoPeliculaModule,
      UsuarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 32771,
      username: 'admin',
      password: '12345678',
      database: 'web-2018',
      synchronize: true,
      dropSchema: false,
      entities: [
        ActorEntity,
        PeliculaEntity,
        EventoEntity,
        EventoPeliculaEntity,
          UsuarioEntity
      ],
    }),ActorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
