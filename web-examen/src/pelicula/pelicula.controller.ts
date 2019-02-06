import { Controller, Get, Param, Post, Body, Delete, Req, BadRequestException, Put, Res } from "@nestjs/common";
import { PeliculaService } from "./pelicula.service";
import { PeliculaCreateDto } from "./pelicula-create-dto/pelicula-create.dto";
import { PeliculaUpdateDto } from "./pelicula-update-dto/pelicula-update.dto";
import { PeliculaEntity } from "./pelicula.entity";
import { ActorService } from "src/actor/actor.service";
import { ActorEntity } from "src/actor/actor.entity";



@Controller('pelicula')

export class PeliculaController {

    constructor(
        private readonly _peliculaService: PeliculaService,
        private readonly _actorService: ActorService,
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
    create(
        @Body() peliculaCrear: PeliculaCreateDto,
        @Res() res
    ) {
        res.redirect("/actor/crear-actor")
        return this._peliculaService.create(peliculaCrear)
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
