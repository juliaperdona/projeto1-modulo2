import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class Cliente {
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

    endereco:string;

}
