import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventoEntity } from "./evento.entity";
import { EventoService } from "./evento.service";
import { EventoController } from "./evento.controller";
import { PeliculaModule } from "src/pelicula/pelicula.module";
import { EventoPeliculaModule } from "src/evento-pelicula/evento.module";

@Module({
    imports: [TypeOrmModule.forFeature([
        EventoEntity
    ]),PeliculaModule, EventoPeliculaModule],
    providers: [EventoService],
    controllers: [EventoController],
    exports: [EventoService],
})

export class EventoModule {

} 
