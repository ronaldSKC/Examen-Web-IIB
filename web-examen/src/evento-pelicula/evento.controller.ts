import { Controller, Get, Param, Post, Body, Delete, Req } from "@nestjs/common";
import { EventoPeliculaService } from "./evento.service";
import { EventoPeliculaCreateDto } from "./evento-pelicula-create-dto/evento-pelicula-create.dto";
import { EventoPeliculaUpdateDto } from "./evento-pelicula-update-dto/evento-pelicula-update.dto";

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
<<<<<<< HEAD
<<<<<<< HEAD
    @Get()
    async verPeliculas(
        @Res() res,
    ){
        let peliculas : EventoPeliculaEntity[]
        peliculas = await this._eventoPeliculaService.findAll()
        const result = peliculas.filter(user => user.evento.id === 1);
        console.log('respuesta map',result)
        res.render('evento-pelicula') 
    }
=======

>>>>>>> parent of 34b389a... peliculas en crear-evento
=======

>>>>>>> parent of 34b389a... peliculas en crear-evento
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
