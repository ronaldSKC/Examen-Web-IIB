import { Controller, Get, Param, Res, Post, Body, Delete, Req, Query } from '@nestjs/common';
import { ActorService } from './actor.service';
import { PeliculaEntity } from 'src/pelicula/pelicula.entity';
import { EventoCreateDto } from './actor-create-dto/actor-create.dto';
import { ActorUpdateDto } from './actor-update-dto/actor-update.dto';
import { PeliculaCreateDto } from 'src/pelicula/pelicula-create-dto/pelicula-create.dto';
import { Like, FindManyOptions } from 'typeorm';
import { PeliculaService } from '../pelicula/pelicula.service';
import { ActorEntity } from './actor.entity';

@Controller('actor')

export class ActorController {

    constructor(
        private readonly _actorService: ActorService,
        private _peliculaService: PeliculaService
    ) { }

    @Get('buscar')
    findAll() {
        return this._actorService.findAll();
    }

    @Get('buscarPorId/:id')
    findOne(
        @Param('id') id,
    ) {
        return this._actorService.findOne(id);
    }
    @Get('crear-actor')
    async crearActor(
        @Res() res,
        @Query('accion') accion: string,
        @Query('nombre') titulo: string
    ) {
        let mensaje = undefined;
        let clase = undefined;
        if (accion && titulo) {
            switch (accion) {
                case 'borrar':
                    mensaje = `Registro ${titulo} eliminado`;
                    clase = 'alert alert-danger';
                    break;
                case 'actualizar':
                    mensaje = `Registro ${titulo} actualizado`;
                    clase = 'alert alert-info';
                    break;
                case 'crear':
                    mensaje = `Registro ${titulo} creado`;
                    clase = 'alert alert-success';
                    break;
            }
        }
        let peliculas: PeliculaEntity[];
        peliculas = await this._peliculaService.findAll();
        const actores = peliculas.forEach((act)=>{act.actor})
        console.log(peliculas)
        res.render(
            'crear-actor', {
                arreglo: peliculas, // AQUI!
                arregloActores: actores,
                booleano: false,
                mensaje: mensaje,
                clase: clase,
                titulo: "Crear Actor"
            });
    }
    @Post('crear-actor')
    create(
        @Body() actorCrear: EventoCreateDto,
        @Res() res,
    ) {
        const actorCrearNew = {
            nombres: actorCrear.nombres,
            apellidos: actorCrear.apellidos,
            fechaNacimiento: actorCrear.fechaNacimiento,
            numeroPeliculas: Number(actorCrear.numeroPeliculas),
            retirado: Boolean(actorCrear.retirado),
        };
        res.redirect("/evento/crear-evento")
        return this._actorService.create(actorCrearNew);
    }

    @Delete('eliminar/:id')
    eliminarUno(
        @Req() req,
    ) {
        return this._actorService.delete(req.params.id);
    }

    @Post('editar/:id')
    editarUno(
        @Param('id') idActor,
        @Body() actorEditar: ActorUpdateDto,
    ) {
        return this._actorService.update(idActor, actorEditar);
    }
}
