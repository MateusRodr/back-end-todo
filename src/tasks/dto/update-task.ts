import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsBoolean()
    @IsOptional()
    completed?: boolean;

    @IsString()
    @IsOptional()
    status?:string

    @IsString()
    @IsOptional()
    category:string
}