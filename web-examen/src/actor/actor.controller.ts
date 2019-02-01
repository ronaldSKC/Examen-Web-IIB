import { Controller, Get, Param, Post, Body, Delete, Req, BadRequestException, Put } from "@nestjs/common";
import { ActorService } from "./actor.service";
import { ActorCreateDto } from "./actor-create-dto/actor-create.dto";
import { ActorUpdateDto } from "./actor-update-dto/actor-update.dto";


@Controller('actor')

export class ActorController {

    constructor(
        private readonly _actorService: ActorService
    ) { }
 
    @Get('buscar')
    findAll() {
        return this._actorService.findAll();
    }
 
    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._actorService.findOne(id);
    }

    @Post('crear')
    create(
        @Body() actorCrear: ActorCreateDto
    ) {
        return this._actorService.create(actorCrear)
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req
    ) {
        return this._actorService.delete(req.params.id)
    }
 
    @Post('editar/:id')
    editarUno(
        @Param('id') idActor,
        @Body() actorEditar: ActorUpdateDto
    ) { 
        return this._actorService.update(idActor, actorEditar)    
    }
}
