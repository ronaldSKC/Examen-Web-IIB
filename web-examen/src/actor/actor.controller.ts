import { Controller, Get, Param, Res, Post, Body, Delete, Req, Query, Session } from '@nestjs/common';
import { ActorService } from './actor.service';
import { PeliculaEntity } from 'src/pelicula/pelicula.entity';
import { EventoCreateDto } from './actor-create-dto/actor-create.dto';
import { ActorUpdateDto } from './actor-update-dto/actor-update.dto';
import { PeliculaCreateDto } from 'src/pelicula/pelicula-create-dto/pelicula-create.dto';
import { Like, FindManyOptions } from 'typeorm';
import { PeliculaService } from '../pelicula/pelicula.service';
import { ActorEntity } from './actor.entity';
import { ActorCreateDto } from 'src/evento/evento-create-dto/evento-create.dto';

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
    @Get('inicio')
    async crearA(
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
        let actores: ActorEntity[];
        actores = await this._actorService.findAll()
        res.render(
            'lista-actores', {
                arregloPeliculas: peliculas, // AQUI!
                arregloActores: actores,
            });
    }
    @Get('crear-actor')
    async crearActor(
        @Res() res,
    ) {
        res.render('crear-actor');
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
        this._actorService.create(actorCrearNew);
        const parametrosConsulta = `?accion=crear&nombre=${actorCrear.nombres}`;
        res.redirect('/actor/inicio' +parametrosConsulta)

    }

    @Post('eliminar-actor/:id')
    async eliminar(
        @Param('id') idActor: string,
        @Res() res
    ) {
        const sedeEncontrada = await this._actorService
            .findOne(+idActor);

        await this._actorService.delete(Number(idActor));

        const parametrosConsulta = `?accion=borrar&nombre=${sedeEncontrada.nombres}`;

        res.redirect('/actor/inicio' + parametrosConsulta);
    }
    @Get('actualizar-actor/:id')
    async actualizarEvento(
        @Param('id') idActor: string,
        @Res() response,
        @Query('error') error: string,
        @Session() sesion
    ) {
            let mensaje = undefined;
            if (error) {
                mensaje = "Datos erroneos";
            }
            const actorActualizar = await this._actorService
                .findOne(Number(idActor));
            response.render(
                'crear-actor', {//ir a la pantalla de crear-usuario
                    actor: actorActualizar,
                    mensaje: mensaje,
                    id: idActor,
                }
            )
    }
    @Post('actualizar-actor/:id')
    async editarUno(
        @Param('id') idActor,
        @Res() res,
        @Body() actorEditar: EventoCreateDto,
    ) {
        
        const actorCrearNew = {
            id : +idActor,
            nombres: actorEditar.nombres,
            apellidos: actorEditar.apellidos,
            fechaNacimiento: actorEditar.fechaNacimiento,
            numeroPeliculas: Number(actorEditar.numeroPeliculas),
            retirado: Boolean(actorEditar.retirado),
        };

            await this._actorService.update(actorCrearNew);

            const parametrosConsulta = `?accion=actualizar&nombre=${actorEditar.nombres}`;

            res.redirect('/actor/inicio' + parametrosConsulta);
    }
}
