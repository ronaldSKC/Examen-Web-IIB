import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindManyOptions } from "typeorm";
import { EventoEntity } from "./evento.entity";
import { EventoCreateDto } from "src/actor/actor-create-dto/actor-create.dto";
import { EventoUpdateDto } from "./evento-update-dto/evento-update.dto";
import { ActorCreateDto } from "./evento-create-dto/evento-create.dto";



@Injectable()

export class EventoService {
    constructor(
        @InjectRepository(EventoEntity)
        private readonly _eventoRepository: Repository<EventoEntity>
    ) { }

    async findOne(id: number) {
        return await this._eventoRepository.findOne(id);
    }

    async findAll(parametros?: FindManyOptions<EventoEntity>): Promise<EventoEntity[]> {
        return await this._eventoRepository.find(parametros)
    }

    async create(datosCrearEvento: ActorCreateDto) {
        return await this._eventoRepository.save(datosCrearEvento)
    }

    async delete(id: number) {
        return await this._eventoRepository.delete(id);
    } 

    async update(id: number, datosEditarEvento: EventoUpdateDto) {
        const editarEvento = this.findOne(id)
        if (editarEvento) {
            return await this._eventoRepository.update(id, datosEditarEvento)
        } else {
            console.log('usuario no econtrado, se lo actualizara')
        }
    }
    
}
