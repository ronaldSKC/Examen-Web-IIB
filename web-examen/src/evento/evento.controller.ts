import { Controller, Get, Param, Post, Body, Delete, Req, Res } from "@nestjs/common";
import { EventoCreateDto } from "src/actor/actor-create-dto/actor-create.dto";
import { EventoUpdateDto } from "./evento-update-dto/evento-update.dto";
import { EventoService } from "./evento.service";
import { ActorCreateDto } from "./evento-create-dto/evento-create.dto";
import { PeliculaEntity } from "src/pelicula/pelicula.entity";
import { PeliculaService } from "src/pelicula/pelicula.service";
import { EventoEntity } from "./evento.entity";
import { EventoPeliculaService } from "src/evento-pelicula/evento.service";


@Controller('evento')

export class EventoController {

    constructor(
        private readonly _eventoService: EventoService,
        private readonly _peliculaService: PeliculaService,
        private readonly _eventoPeliculaService: EventoPeliculaService,
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
    @Get()
    async evento(
        @Res() res
    ) {
        let eventos : EventoEntity[]
        eventos= await this._eventoService.findAll()
        res.render("evento",{
            arreglo: eventos
        })
    }
    @Get('ver-pelicula')
    verPelicula(
        @Res() res
    ){
        res.render('ver-pelicula')
    }
    @Get("crear-evento")
    async irAEvento(
        @Res() res
    ) {
        let peliculas: PeliculaEntity[]
        peliculas = await this._peliculaService.findAll()

        res.render("crear-evento", {
            arreglo: peliculas
        })
    }
    @Post('crear-evento')
    create(
        @Res() res,
        @Body() eventoCrear: EventoEntity
    ) {
        const eventoCrearNew = {
            nombre: eventoCrear.nombre,
            fecha: eventoCrear.fecha,
            latitud: eventoCrear.latitud,
            longitud: eventoCrear.longitud,
        }
        const eventoCreado = this._eventoService.create(eventoCrearNew);
        for (let numero of eventoCrear.eventoPelicula) {              
            eventoCreado.then((even) => {
                const eventoPelicula = {
                   
                    pelicula: numero,
                    evento: even.id
                }
                this._eventoPeliculaService.create(eventoPelicula)
                console.log(eventoPelicula)
            })
        }
        res.redirect('/evento')
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
