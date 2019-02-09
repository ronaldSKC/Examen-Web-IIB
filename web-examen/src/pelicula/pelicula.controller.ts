import { Controller, Get, Param, Post, Body, Delete, Req, BadRequestException, Put, Res, Query, Session } from "@nestjs/common";
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
            arregloActores: pelicula
        })
        
    }   
    @Post('crear-pelicula')
    create(
        @Body() peliculaCrear: PeliculaCreateDto,
        @Res() res
    ) {
        res.redirect("/actor/inicio")
        return this._peliculaService.create(peliculaCrear)
    }

    @Post('eliminar-pelicula/:id')
    async eliminar(
        @Param('id') idPelicula: string,
        @Res() res
    ) {
        const sedeEncontrada = await this._peliculaService
            .findOne(+idPelicula);

        await this._peliculaService.delete(Number(idPelicula));

        const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.nombre}`;

        res.redirect('/actor/inicio' + parametrosConsulta);
    }
    @Get('actualizar-pelicula/:id')
    async actualizarEvento(
        @Param('id') idPelicula: string,
        @Res() response,
        @Query('error') error: string,
        @Session() sesion
    ) {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const peliculaActualizar = await this._peliculaService
                .findOne(Number(idPelicula));
                let pelicula: ActorEntity[]
                pelicula= await this._actorService.findAll()    
            response.render(
                'crear-pelicula', {//ir a la pantalla de crear-usuario
                    pelicula: peliculaActualizar,
                    mensaje: mensaje,
                    id: idPelicula,
                    arregloActores: pelicula
                }
            )
    }
    @Post('actualizar-pelicula/:id')
    async editarUno(
        @Param('id') idPelicula,
        @Res() res,
        @Body() peliculaEditar: PeliculaCreateDto,
    ) {
        peliculaEditar.id = +idPelicula;

            await this._peliculaService.update(peliculaEditar);

            const parametrosConsulta = `?accion=actualizar&nombre=${peliculaEditar.nombre}`;

            res.redirect('/actor/inicio' + parametrosConsulta);
    }
}
