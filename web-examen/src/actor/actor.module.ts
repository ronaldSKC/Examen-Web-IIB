import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActorService } from "./actor.service";
import { ActorController } from "./actor.controller";
import { ActorEntity } from "./actor.entity";
import { PeliculaService } from "src/pelicula/pelicula.service";
import { PeliculaModule } from "src/pelicula/pelicula.module";

@Module({
    imports: [TypeOrmModule.forFeature([
        ActorEntity
    ]), PeliculaModule],
    providers: [ActorService, 
    ],
    controllers: [ActorController],
    exports: [ActorService],
})

export class ActorModule {

} 
    