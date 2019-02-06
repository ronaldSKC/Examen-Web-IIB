import { Controller, Get, Param, Post, Body, Delete, Req, Res } from "@nestjs/common";
import { EventoCreateDto } from "src/actor/actor-create-dto/actor-create.dto";
import { EventoUpdateDto } from "./evento-update-dto/evento-update.dto";
import { EventoService } from "./evento.service";
import { ActorCreateDto } from "./evento-create-dto/evento-create.dto";


@Controller('evento')

export class EventoController {

    constructor(
        private readonly _eventoService: EventoService
    ) { }
 
    @Get('buscar')
    findAll() {
        return this._eventoService.findAll();
    }
 
    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._eventoService.findOne(id);
    }
    @Get('crear-evento')
    crearEvento(
        @Res() res
    ){
        res.render('crear-evento')
    }
    @Get()
    async irAEvento(
        @Res() res
    ){
        let eventos :  ActorCreateDto[]
        eventos= await this._eventoService.findAll()
        res.render("evento",{
            arreglo: eventos
        })
    }
    @Post('crear-evento')
    create(
        @Body() eventoCrear: ActorCreateDto
    ) {
        
        return this._eventoService.create(eventoCrear);
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req
    ) {
        return this._eventoService.delete(req.params.id);
    }
 
    @Post('editar/:id')
    editarUno(
        @Param('id') idEvento,
        @Body() eventoEditar: EventoUpdateDto
    ) { 
        return this._eventoService.update(idEvento, eventoEditar);
    }
}
