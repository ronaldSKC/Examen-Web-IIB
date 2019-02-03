import { IsOptional } from "class-validator";

export class EventoPeliculaCreateDto {

    @IsOptional()
    id: number;

}