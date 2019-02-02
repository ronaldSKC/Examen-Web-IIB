import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { PeliculaEntity } from "src/pelicula/pelicula.entity";
import { EventoEntity } from "src/evento/evento.entity";

@Entity('evento-pelicula')
export class EventoPeliculaEntity{
    
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(type => PeliculaEntity, pelicula => pelicula.id, {eager: true})
    pelicula: PeliculaEntity;

    @ManyToOne(type => EventoEntity, evento => evento.id, {eager: true})
    evento: EventoEntity;

}