import { Controller, Get, Param, Post, Body, Delete, Req, BadRequestException, Put, Res } from "@nestjs/common";
import { ActorService } from "./actor.service";
import { ActorUpdateDto } from "./actor-update-dto/actor-update.dto";
import { ActorCreateDto } from "src/evento/evento-create-dto/evento-create.dto";
import { EventoCreateDto } from "./actor-create-dto/actor-create.dto";



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
    @Get('crear-actor')
    crearActor(
        @Res() res
    ){
        res.render('crear-actor')
    }
    @Post('crear-actor')
    create(
        @Body() actorCrear: EventoCreateDto
    ) {
        const actorCrearNew ={
            nombres: actorCrear.nombres,
            apellidos: actorCrear.apellidos,
            fechaNacimiento: actorCrear.fechaNacimiento,
            numeroPeliculas: Number(actorCrear.numeroPeliculas),
            retirado: Boolean(actorCrear.retirado) 
        }
        return this._actorService.create(actorCrearNew)
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
