import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventoPeliculaEntity } from "./evento.entity";
import { EventoPeliculaCreateDto } from "./evento-pelicula-create-dto/evento-pelicula-create.dto";
import { EventoPeliculaUpdateDto } from "./evento-pelicula-update-dto/evento-pelicula-update.dto";



@Injectable()

export class EventoPeliculaService {
    constructor(
        @InjectRepository(EventoPeliculaEntity)
        private readonly _eventoPeliculaRepository: Repository<EventoPeliculaEntity>
    ) { }

    async findOne(id: number) {
        
        return await this._eventoPeliculaRepository.findOne(id);
    }

    async findAll() {
        return await this._eventoPeliculaRepository.find();
    }

    async create(datosCrearEventoPelicula: EventoPeliculaCreateDto) {
        return await this._eventoPeliculaRepository.save(datosCrearEventoPelicula)
    }

    async delete(id: number) {
        return await this._eventoPeliculaRepository.delete(id);
    } 

    async update(id: number, datosEditarEventoPelicula: EventoPeliculaUpdateDto) {
        const editarEventoPelicula = this.findOne(id)
        if (editarEventoPelicula) {
            return await this._eventoPeliculaRepository.update(id, datosEditarEventoPelicula)
        } else {
            console.log('usuario no econtrado, se lo actualizara')
        }
    }
    
}
