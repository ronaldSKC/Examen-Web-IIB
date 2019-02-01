import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PeliculaService } from "./pelicula.service";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaController } from "./pelicula.controller";

@Module({
    imports: [TypeOrmModule.forFeature([
        PeliculaEntity
    ])],
    providers: [PeliculaService],
    controllers: [PeliculaController],
    exports: [PeliculaService],
})

export class PeliculaModule {

}
