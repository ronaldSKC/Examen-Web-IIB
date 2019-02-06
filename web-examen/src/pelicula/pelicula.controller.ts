import { Controller, Get, Param, Post, Body, Delete, Req, BadRequestException, Put, Res } from "@nestjs/common";
import { PeliculaService } from "./pelicula.service";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaUpdateDto } from "./pelicula-update-dto/pelicula-update.dto";
import { PeliculaEntity } from "./pelicula.entity";
import { ActorService } from "src/actor/actor.service";
import { ActorEntity } from "src/actor/actor.entity";
import { EventoPeliculaEntity } from "src/evento-pelicula/evento.entity";
import { EventoPeliculaService } from "src/evento-pelicula/evento.service";



@Controller('pelicula')

export class PeliculaController {

    constructor(
        private readonly _peliculaService: PeliculaService,
        private readonly _actorService: ActorService,
        private readonly _eventoPelicula: EventoPeliculaService,
    ) { }
 
    @Get('buscar')
    findAll() {
        return this._peliculaService.findAll();
    }
 
    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id
    ) {
        return this._peliculaService.findOne(id);
    }
    @Get('crear-pelicula')
    async crearPelicula(
        @Res() res
    ){
        let pelicula: ActorEntity[]
        pelicula= await this._actorService.findAll()
        res.render('crear-pelicula',{
            arreglo: pelicula
        })
        
    }   
    @Post('crear-pelicula')
    async create(
        @Body() peliculaCrear: PeliculaCreateDto,
        @Res() res
    ) {
        this._peliculaService.create(peliculaCrear)    
        res.redirect("/actor/crear-actor")
  
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req
    ) {
        return this._peliculaService.delete(req.params.id)
    }
 
    @Post('editar/:id')
    editarUno(
        @Param('id') idPelicula,
        @Body() peliculaEditar: PeliculaUpdateDto
    ) { 
        return this._peliculaService.update(idPelicula, peliculaEditar)    
    }
}
