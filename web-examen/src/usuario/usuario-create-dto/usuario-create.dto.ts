import { IsOptional, IsInt, IsString, IsNotEmpty, IsDateString } from "class-validator";

export class UsuarioCreateDto{
    
    @IsOptional()
    @IsInt()
    id?: number
    
    @IsString()
    @IsNotEmpty()
    nombre: string;
    
    @IsString()
    @IsNotEmpty()
    correo: string;

    @IsString() 
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsDateString()
    fecha_nacimiento: string;
}