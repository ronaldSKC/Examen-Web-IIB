import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('evento')
export class EventoEntity{
    
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({type: 'varchar', length:40})
    nombre?: string;
    
    @Column({type: 'varchar', length:10})
    fecha?: string;
    
    @Column({type: 'decimal'})
    latitud?: number;

    @Column({type: 'decimal'})
    longitud?: number;


}