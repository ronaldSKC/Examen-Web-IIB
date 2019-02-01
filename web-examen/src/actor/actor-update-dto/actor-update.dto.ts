import { IsNotEmpty, IsString, IsNumber,  IsOptional, IsDateString, IsBooleanString } from "class-validator";

export class ActorUpdateDto {

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