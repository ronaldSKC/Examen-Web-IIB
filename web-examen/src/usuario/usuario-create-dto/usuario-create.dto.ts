import {
    IsOptional,
    IsInt,
    IsString,
    IsNotEmpty,
    IsDateString,
    IsEmail,
    MinLength,
    MaxLength,
    Matches, IsAlpha, IsDate
} from "class-validator";

export class UsuarioDto {

    @IsOptional()
    @IsInt()
    id?:number;

    @IsNotEmpty()
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[ ]).{2,20}$/)
    nombre_usuario?:string;


    @IsNotEmpty()
    @IsEmail()
    email_usuario?:string;


   // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/)
    @IsString()
    @IsNotEmpty()
    password_usuario?:string;


    @IsString()
    @IsNotEmpty()
    fecha_nacimiento_usuario?:string;

}