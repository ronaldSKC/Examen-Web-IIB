import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PeliculaService } from "./pelicula.service";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaController } from "./pelicula.controller";
import { ActorModule } from "src/actor/actor.module";
import { ActorService } from "src/actor/actor.service";

@Module({
    imports: [
        forwardRef(()=> ActorModule)
        ,TypeOrmModule.forFeature([
        PeliculaEntity
    ])],
    providers: [PeliculaService],
    controllers: [PeliculaController],
    exports: [PeliculaService],
})

export class PeliculaModule {

}
