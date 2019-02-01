import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional, IsBooleanString, IsDateString } from "class-validator";

export class ActorCreateDto {

    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    nombres?: string;

    @IsNotEmpty()
    @IsString()
    apellidos?: string;

    @IsNotEmpty()
    @IsDateString()
    fechaNacimiento?: string;

    @IsNotEmpty()
    @IsNumber()
    numeroPeliculas?: number;

    @IsNotEmpty()
    @IsBooleanString()
    retirado?: boolean;

}