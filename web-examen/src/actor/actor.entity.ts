import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PeliculaEntity } from "src/pelicula/pelicula.entity";

@Entity('actor')
export class ActorEntity{
    
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({type: 'varchar', length:40})
    nombres: string;
    
    @Column({type: 'varchar', length:40})
    apellidos: string;
    
    @Column({type: 'varchar'})
    fechaNacimiento?: string;

    @Column({type: 'int'})
    numeroPeliculas?: number;

    @Column({type: 'boolean'})
    retirado: boolean;

    @OneToMany(type => PeliculaEntity, pelicula => pelicula.actor)
    pelicula: PeliculaEntity[];

}