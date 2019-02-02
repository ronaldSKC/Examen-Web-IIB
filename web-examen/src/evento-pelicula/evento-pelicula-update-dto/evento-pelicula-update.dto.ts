import { IsOptional } from "class-validator";

export class EventoPeliculaUpdateDto {

    @IsOptional()
    id?: number;

}