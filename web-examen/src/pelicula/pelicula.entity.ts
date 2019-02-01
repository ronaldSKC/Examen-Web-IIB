import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ActorEntity } from "src/actor/actor.entity";

@Entity('pelicula')
export class PeliculaEntity{
    
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({type: 'varchar', length:40})
    nombre?: string;
    
    @Column({type: 'int'})
    anioLanzamiento?: number;
    
    @Column({type: 'int'})
    rating?: number;

    @Column({type: 'varchar'})
    actoresPrincipales?: string;

    @Column({type: 'varchar'})
    sinopsis?: string;

    @ManyToOne(type => ActorEntity, actor => actor.id, {eager: true})
    actor?: ActorEntity;

}
