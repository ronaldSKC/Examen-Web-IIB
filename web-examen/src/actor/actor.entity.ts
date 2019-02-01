import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

}