import { Controller } from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Controller('usuario')
export class UsuarioController{
    constructor(
        private readonly _usuarioService: Repository<UsuarioEntity>
    ){}
}