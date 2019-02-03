import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id?: number
    @Column({type: 'varchar', length:40})
    nombre: string;
    
    @Column({type: 'varchar', length:40})
    correo: string;
    
    @Column({type: 'varchar'})
    password: string;

    @Column({type: 'varchar'})
    fecha_nacimiento: string;
}