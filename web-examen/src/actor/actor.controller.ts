import { Controller, Get, Param, Post, Body, Delete, Req, BadRequestException, Put } from "@nestjs/common";
import { ActorService } from "./actor.service";
import { ActorCreateDto } from "./actor-create-dto/actor-create.dto";
import { ActorUpdateDto } from "./actor-update-dto/actor-update.dto";


@Controller('actor')

export class ActorController {

    constructor(
        private readonly _usuarioService: ActorService
    ) { }
 
    @Get('buscar')
    findAll() {
        return this._usuarioService.findAll();
    }
 
    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._usuarioService.findOne(id);
    }

    @Post('crear')
    create(
        @Body() actorCrear: ActorCreateDto
    ) {
        const actorACrearse = actorCrear
        return this._usuarioService.create(actorACrearse)
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req
    ) {
        return this._usuarioService.delete(req.params.id)
    }
 
    @Post('editar/:id')
    editarUno(
        @Param('id') idUsuario,
        @Body() actorEditar: ActorUpdateDto
    ) { 
        const usuarioAModificar = actorEditar
        return this._usuarioService.update(idUsuario, usuarioAModificar)    
    }
}
