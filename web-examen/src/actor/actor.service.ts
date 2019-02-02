import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindOneOptions } from "typeorm";
import { ActorEntity } from "./actor.entity";
import { ActorUpdateDto } from "./actor-update-dto/actor-update.dto";
import { ActorCreateDto } from "src/evento/evento-create-dto/evento-create.dto";


@Injectable()

export class ActorService {
    constructor(
        @InjectRepository(ActorEntity)
        private readonly _usuarioRepository: Repository<ActorEntity>
    ) { }

    async findOne(id: number) {
        return await this._usuarioRepository.findOne(id);
    }

    async findAll() {
        return await this._usuarioRepository.find();
    }

    async create(datosCrearActor: ActorCreateDto) {
        return await this._usuarioRepository.save(datosCrearActor)
    }

    async delete(id: number) {
        return await this._usuarioRepository.delete(id);
    } 

    
    async update(id: number, datosEditarActor: ActorUpdateDto) {
        const editarUsuario = this.findOne(id)
        if (editarUsuario) {
            return await this._usuarioRepository.update(id, datosEditarActor)
        } else {
            console.log('usuario no econtrado, se lo actualizara')
        }
    }
    
}
