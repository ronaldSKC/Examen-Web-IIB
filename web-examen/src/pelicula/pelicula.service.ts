import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindManyOptions } from "typeorm";
import { PeliculaEntity } from "./pelicula.entity";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaUpdateDto } from "./pelicula-update-dto/pelicula-update.dto";


@Injectable()

export class PeliculaService {
    constructor(
        @InjectRepository(PeliculaEntity)
        private readonly _peliculaRepository: Repository<PeliculaEntity>
    ) { }

    async findOne(id: number) {
        return await this._peliculaRepository.findOne(id);
    }

    async findAll(parametrosConsulta?:FindManyOptions<PeliculaEntity>):Promise<PeliculaEntity[]> {
        return await this._peliculaRepository.find(parametrosConsulta);
    }

    async create(datosCrearPelicula: PeliculaCreateDto) {
        return await this._peliculaRepository.save(datosCrearPelicula)
    }

    async delete(id: number) {
        return await this._peliculaRepository.delete(id);
    } 

    
    async update(id: number, datosEditarPelicula: PeliculaUpdateDto) {
        const editarUsuario = this.findOne(id)
        if (editarUsuario) {
            return await this._peliculaRepository.update(id, datosEditarPelicula)
        } else {
            console.log('pelicula no econtrada, no se lo actualizara')
        }
    }
    
}
