import { Injectable } from '@nestjs/common';
import { Motorista } from '../motorista/motorista';

@Injectable()
export class MotoristasServices {

    motoristas: Motorista[] = [

        {
            id: 1,
            nome: "João",
            dataDeNascimento: "12/05/1989",
            cpf: 89578965100,
            placa: "mmc5719",
            modelo: "onix",
            bloqueado: false,
        },
        {
            id: 2,
            nome: "Maria",
            dataDeNascimento: "22/09/2001",
            cpf: 12345678900,
            placa: "hgf594",
            modelo: "gol",
            bloqueado: false,
        }
    ];

    buscarMotoristas(page, size){
        

        const indiceInicial = (page - 1) * size
        const indiceFinal = page * size

       const resultadoMotoristas =  this.motoristas.slice(indiceInicial, indiceFinal)

        return resultadoMotoristas
    }


    getByCpf(cpf: number) {
        const motorista = this.motoristas.find((value) => value.cpf == cpf);
        return motorista

    }

    criar(motorista: Motorista) {

        let lastId = 0;
        if (this.motoristas.length > 0) {
            lastId = this.motoristas[this.motoristas.length - 1].id
        }

        motorista.id = lastId + 1;
        this.motoristas.push(motorista);

        return motorista

    }

    editar(motorista: Motorista) {
        const motoristaArray = this.getByCpf(motorista.cpf)

        if (motoristaArray) {
            motoristaArray.id = motorista.id;
            motoristaArray.nome = motorista.nome;
            motoristaArray.dataDeNascimento = motorista.dataDeNascimento;
            motoristaArray.cpf = motorista.cpf;
            motoristaArray.placa = motorista.placa;
            motoristaArray.modelo = motorista.modelo
        }
        return motoristaArray
    }

    deletar(cpf: number) {

        const index = this.motoristas.findIndex((value) => value.cpf == cpf);
        this.motoristas.splice(index, 1);
        return ("Ok")

    }

    // bloquear(cpf:number){
    //     const motorista = this.motoristas.find((value) => value.cpf == cpf);
    //     this.motoristas.((motorista)=> {

    //     })
        
        
    // }


}
