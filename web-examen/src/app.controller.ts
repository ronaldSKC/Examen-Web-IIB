import {BadRequestException, Body, Controller, Get, HttpCode, Post, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario/usuario.service";
import {RolPorUsuarioService} from "./rolPorUsuario/rolPorUsuario.service";
import {validate} from "class-validator";
import {CredencialesDto} from "./dto/credenciales.dto";


@Controller()
export class AppController {
    constructor(private readonly appService: AppService,
                private readonly _usuarioService: UsuarioService,
                private readonly _rolPorUsuarioService :RolPorUsuarioService) {}


    @Get('login')

    credenciales(
        @Res() response
    ) {
        response.render('login')
    }

    @Post('credenciales')
    @HttpCode(200)
    async metodoCrendenciales(
        @Res() response,
        @Session() session,
        @Body('email_usuario') username_email,
        @Body('password') password
    ) {
        console.log(username_email, password)
        const usuario = new CredencialesDto
        usuario.email_usuario = username_email
        usuario.password_usuario = password
        const arregloErrores = await validate(usuario);
        const existeErrores = arregloErrores.length > 0;
        if (existeErrores) {
            throw new BadRequestException('Datos incorrectos');
        } else {
            const respuestaAutenticacion = await this._usuarioService.credenciales(usuario)

            console.log(respuestaAutenticacion)
            if(respuestaAutenticacion){
                const idUsuario= respuestaAutenticacion.id;
                const rolUsuario = await this._rolPorUsuarioService.verificarRol(+idUsuario)
                if(rolUsuario){
                    const nombreRol = rolUsuario.rol.rol_nombre
                    session.rol = nombreRol;
                    session.username_email = username_email;
                    session.idUsuario = idUsuario;

                    switch (nombreRol) {
                        case 'usuario':
                            response.redirect('/usuario/crear-usuario')
                            break;
                        case 'administrador':
                            response.redirect('/usuario/crear-usuario')
                            break;
                        default:
                            response.send('Aun no se ha asignado una tarea para este rol')
                    }
                }else{
                   throw new BadRequestException({mensaje: 'Error login'})

                }
            }  else{
                response.redirect('login')
            }

        }

    }

    @Get('logout')
    async logout(
        @Res() response,
        @Session() sesion
    )
    {
        sesion.usuario = undefined;
        sesion.destroy()
        response.redirect('login')
    }

}