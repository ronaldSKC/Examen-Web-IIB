import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventoPeliculaEntity } from "./evento.entity";
import { EventoPeliculaService } from "./evento.service";
import { EventoPeliculaController } from "./evento.controller";


@Module({
    imports: [TypeOrmModule.forFeature([
        EventoPeliculaEntity
    ])],
    providers: [EventoPeliculaService],
    controllers: [EventoPeliculaController],
    exports: [EventoPeliculaService],
})

export class EventoPeliculaModule {

} 
