import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindOneOptions, FindManyOptions } from "typeorm";
import { ActorEntity } from "./actor.entity";
import { ActorUpdateDto } from "./actor-update-dto/actor-update.dto";
import { ActorCreateDto } from "src/evento/evento-create-dto/evento-create.dto";
import { EventoCreateDto } from "./actor-create-dto/actor-create.dto";
import { PeliculaEntity } from "src/pelicula/pelicula.entity";
import { PeliculaService } from "src/pelicula/pelicula.service";


@Injectable()

export class ActorService {
    
    constructor(
        @InjectRepository(ActorEntity)
        private readonly _usuarioRepository: Repository<ActorEntity>,
        @Inject(forwardRef(()=>PeliculaService))
        private readonly peliculaService:PeliculaService,
    ) { }

    async findOne(id: number) {
        return await this._usuarioRepository.findOne(id);
    }

    async findAll(parametros?: FindManyOptions<ActorEntity>): Promise<ActorEntity[]> {
        return await this._usuarioRepository.find(parametros)
    }
    
    async create(datosCrearActor: EventoCreateDto) {
        return await this._usuarioRepository.save(datosCrearActor)
    }

    async delete(idActor: number):Promise<ActorEntity> {
        const sedeEntityAEliminar = this._usuarioRepository
        .create({
            id:idActor
        })
        return await this._usuarioRepository.remove(sedeEntityAEliminar);
    } 

    
    async update(nuevaMascota: EventoCreateDto): Promise<ActorEntity> {

        const medicamentoEntity = this._usuarioRepository.create(nuevaMascota);
        return this._usuarioRepository.save(medicamentoEntity)
    }
    
}
