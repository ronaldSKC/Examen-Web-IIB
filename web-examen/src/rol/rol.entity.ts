import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('rol')
export class RolEntity{
    
    @PrimaryGeneratedColumn()
    id?: number
    @Column({type: 'varchar', length:40})
    nombre: string;
    
}