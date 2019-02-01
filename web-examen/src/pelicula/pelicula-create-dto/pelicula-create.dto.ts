import { IsNotEmpty, IsString, IsOptional, IsInt } from "class-validator";

export class PeliculaCreateDto {

    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    nombre?: string;

    @IsNotEmpty()
    @IsInt()
    anioLanzamiento?: number;

    @IsNotEmpty()
    @IsInt()
    rating?: number;

    @IsNotEmpty()
    @IsString()
    actoresPrincipales?: string;

    @IsNotEmpty()
    @IsString()
    sinopsis?: string;

}
