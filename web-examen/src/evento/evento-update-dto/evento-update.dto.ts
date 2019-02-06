import { IsString, IsNumber,  IsOptional, IsDateString, IsBooleanString } from "class-validator";

export class EventoUpdateDto {

    @IsOptional()
    id: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsDateString()
    fecha: string;

    @IsOptional()
    @IsNumber()
    latitud: number;

    @IsOptional()
    @IsNumber()
    longitud: number;

}