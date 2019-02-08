import { Controller, Get, Param, Post, Body, Delete, Req, Res } from "@nestjs/common";
import { EventoPeliculaService } from "./evento.service";
import { EventoPeliculaCreateDto } from "./evento-pelicula-create-dto/evento-pelicula-create.dto";
import { EventoPeliculaUpdateDto } from "./evento-pelicula-update-dto/evento-pelicula-update.dto";
import { EventoPeliculaEntity } from "./evento.entity";

@Controller('evento-pelicula')

export class EventoPeliculaController {

    constructor(
        private readonly _eventoPeliculaService: EventoPeliculaService
    ) { }
 
    @Get('buscar')
    findAll() {
        return this._eventoPeliculaService.findAll();
    }
 
    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._eventoPeliculaService.findOne(id);
    }
    @Get('evento-pelicula')
    async verEvento(
        @Res() res
    ){
        const eventoPeliculas = this._eventoPeliculaService.findAll()
        console.log(eventoPeliculas)
        const eve = await eventoPeliculas
        const filter = eve.filter((respuesta)=>{return respuesta.evento.id===1})
        const tamaño = filter.length
        console.log(tamaño)
        console.log(filter[0].id)
        res.render('evento-pelicula',{
            arreglo: filter,
            tam: tamaño
        })
    }



    @Post('crear')
    create(
        @Body() eventoPeliculaCrear: EventoPeliculaCreateDto
    ) {
        return this._eventoPeliculaService.create(eventoPeliculaCrear);
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req
    ) {
        return this._eventoPeliculaService.delete(req.params.id);
    }
 
    @Post('editar/:id')
    editarUno(
        @Param('id') idEventoPelicula,
        @Body() eventoPeliculaEditar: EventoPeliculaUpdateDto
    ) { 
        return this._eventoPeliculaService.update(idEventoPelicula, eventoPeliculaEditar);
    }
}
