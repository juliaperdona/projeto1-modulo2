import { isString } from "util";
import { IsString,IsBoolean, IsNumber, IsNotEmpty, MaxLength } from "class-validator";

export class Motorista {

    
    id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    nome: string;

    @IsNotEmpty()
    @IsString()
    dataDeNascimento: string;

    @IsNotEmpty()
    @IsNumber()
    cpf: number;

    @IsNotEmpty()
    @IsString()
    placa: string;

    @IsNotEmpty()
    @IsString()
    modelo:string;

    @IsNotEmpty()
    @IsBoolean()
    bloqueado: boolean;

}
