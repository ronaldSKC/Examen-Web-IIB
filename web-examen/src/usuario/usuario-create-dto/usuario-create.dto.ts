import {IsOptional, IsInt, IsString, IsNotEmpty, IsDateString, IsEmail, MinLength} from "class-validator";

export class UsuarioCreateDto{
    
    @IsOptional()
    @IsInt()
    id?: number
    
    @IsString()
    @IsNotEmpty()
    nombre?: string;
    

    @IsNotEmpty()
    @IsEmail()
    correo?: string;

    @IsString() 
    @IsNotEmpty()
    @MinLength(8)
    password?: string;

    @IsString()
    @IsNotEmpty()
    fecha_nacimiento?: string;


}