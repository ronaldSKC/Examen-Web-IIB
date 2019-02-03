import { IsString, IsOptional, IsInt } from "class-validator";

export class PeliculaUpdateDto {

    @IsOptional()
    id: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsInt()
    anioLanzamiento: number;

    @IsOptional()
    @IsInt()
    rating: number;

    @IsOptional()
    @IsString()
    actoresPrincipales: string;

    @IsOptional()
    @IsString()
    sinopsis: string;
    
}
