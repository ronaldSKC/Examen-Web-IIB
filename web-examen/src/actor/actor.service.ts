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

    async findAll() {
        return await this._usuarioRepository.find();
    }
    /*async findAllMovies(parametroBusqueda?: FindManyOptions<ActorEntity>){
        const actor = await this._usuarioRepository.find(parametroBusqueda);
        const movies = actor.forEach((movie)=>{movie.pelicula})
        
    }*/
    async create(datosCrearActor: EventoCreateDto) {
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
