import { Controller } from "@nestjs/common";
import { Repository } from "typeorm";
import { RolEntity } from "./rol.entity";

@Controller('rol')
export class RolController{
    constructor(
        private readonly _rolService: Repository<RolEntity>
    ){}
}