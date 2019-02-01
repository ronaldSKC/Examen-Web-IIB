import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './actor/actor.entity';
import { ActorModule } from './actor/actor.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { PeliculaEntity } from './pelicula/pelicula.entity';

@Module({
  imports: [
    ActorModule,
    PeliculaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 32769,
      username: 'admin',
      password: '12345678',
      database: 'web-2018',
      synchronize: true,
      entities: [
        ActorEntity,
        PeliculaEntity
      ],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
