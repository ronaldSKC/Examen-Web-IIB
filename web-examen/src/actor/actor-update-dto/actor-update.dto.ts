import { IsString, IsNumber,  IsOptional, IsDateString, IsBooleanString } from "class-validator";

export class ActorUpdateDto {

    @IsOptional()
    id?: number;

    @IsOptional()
    @IsString()
    nombres: string;

    @IsOptional()
    @IsString()
    apellidos: string;

    @IsOptional()
    @IsDateString()
    fechaNacimiento: string;

    @IsOptional()
    @IsNumber()
    numeroPeliculas: number;

    @IsOptional()
    @IsBooleanString()
    retirado: boolean;
}