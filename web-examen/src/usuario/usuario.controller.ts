import {Body, Controller, Get, Post, Res, ForbiddenException, Param, BadRequestException} from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import {Usuario,UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./usuario-create-dto/usuario-create.dto";
import {Like} from "typeorm";
import {validate, ValidationError} from "class-validator";
import {RolService} from "../rol/rol.service";

@Controller('usuario')
export class UsuarioController{
    constructor(
        private readonly _usuarioService: UsuarioService,
      //  private readonly _rolesService: RolService,
    ){

    }

    @Get('login')
    credenciales(
        @Res() response,
    ) {
        response.render('login')
    }

    @Get('crear-usuario')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-usuario'
        )
    }

    @Post('crear-usuario')
    async crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {
        const usuarioValidado = new UsuarioCreateDto();

        usuarioValidado.nombre = usuario.nombre;
        usuarioValidado.correo = usuario.correo;
        usuarioValidado.password = usuario.password;
        usuarioValidado.fecha_nacimiento = usuario.fecha_nacimiento;

        const errores= await validate(usuarioValidado);

        const hayErrores = errores.length >0;

        if (hayErrores) {
            console.error(errores);
            throw new BadRequestException('Error al registrar datos');

        } else {
            await this._usuarioService.crear(usuario);

            response.redirect('/usuario/login');


        }


    }


}