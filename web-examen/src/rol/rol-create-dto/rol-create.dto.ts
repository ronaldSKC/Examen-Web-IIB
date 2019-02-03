import { IsOptional, IsInt, IsString, IsNotEmpty } from "class-validator";

export class RolCreateDto{
    @IsOptional()
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;
}