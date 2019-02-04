import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import {FindManyOptions, Repository} from "typeorm";

@Injectable()
export class UsuarioService{

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository : Repository<UsuarioEntity>
    ){

    }

    async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        // Instanciar una entidad -> .create()
        const usuarioEntity = this._usuarioRepository
            .create(nuevoUsuario);

        // Guardar una entidad en la BDD -> .save()
        const usuarioCreado = await this._usuarioRepository
            .save(usuarioEntity);

        return usuarioCreado;
    }
}

export interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
    password: string;
    fecha_nacimiento?: string;
}