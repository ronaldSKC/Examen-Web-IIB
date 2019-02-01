import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('pelicula')
export class PeliculaEntity{
    
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({type: 'varchar', length:40})
    nombre: string;
    
    @Column({type: 'int', length:40})
    anioLanzamiento: number;
    
    @Column({type: 'int'})
    rating?: number;

    @Column({type: 'varchar'})
    actoresPrincipales?: string;

    @Column({type: 'varchar'})
    sinopsis: string;

}
