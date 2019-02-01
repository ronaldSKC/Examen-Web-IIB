import { IsNotEmpty, IsString, IsBoolean, IsNumber, IsDate, IsOptional, IsDateString, IsBooleanString } from "class-validator";

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

/*
7.	Actor 
- nombres 
- apellidos 
- fechaNacimiento 
- numeroPeliculas (entero) 
- retirado (booleano) 
 
 
Pelicula 
- identificadorPelicula (entero) 
- nombre 
- anioLanzamiento (entero) 
- rating (entero) 
- actoresPrincipales 
- sinopsis 
- actorId 
 

*/