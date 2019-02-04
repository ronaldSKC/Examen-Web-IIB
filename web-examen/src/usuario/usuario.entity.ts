import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {EventoPeliculaEntity} from "../evento-pelicula/evento.entity";
import {RolEntity} from "../rol/rol.entity";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length:40})
    nombre: string;
    
    @Column({type: 'varchar', length:40})

    correo?: string;
    
    @Column({type: 'varchar'})
    password: string;

    @Column({type: 'varchar',
        default: '01/3/1993',})
    fecha_nacimiento: string;

}