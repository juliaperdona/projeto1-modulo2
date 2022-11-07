import { Injectable } from '@nestjs/common';
import { Cliente } from '../cliente/cliente';

@Injectable()
export class ClienteService {
    clientes: Cliente[] = [

        {
            id: 1,
            nome: "José",
            dataDeNascimento: "28/09/1988",
            cpf: 45678912300,
            endereco: "rua 123, palhoça, sc",
        },
        {
            id: 2,
            nome: "João",
            dataDeNascimento: "30/06/2000",
            cpf: 45612378900,
            endereco: "rua passaros, natal, rn",
        }
    ];


    buscarClientes(page, size) {

        const indiceInicial = (page - 1) * size
        const indiceFinal = page * size

        const resultadoClientes = this.clientes.slice(indiceInicial, indiceFinal)

        return resultadoClientes
    }


    getByCpf(cpf: number) {
        const cliente = this.clientes.find((value) => value.cpf == cpf);
        return cliente

    };

    criar(cliente: Cliente) {

        let lastId = 0;
        if (this.clientes.length > 0) {
            lastId = this.clientes[this.clientes.length - 1].id
        }

        cliente.id = lastId + 1;
        this.clientes.push(cliente);

        return cliente

    };

    editar(cliente: Cliente) {
        const clienteArray = this.getByCpf(cliente.cpf)

        if (clienteArray) {
            clienteArray.id = cliente.id,
                clienteArray.nome = cliente.nome;
            clienteArray.dataDeNascimento = cliente.dataDeNascimento;
            clienteArray.cpf = cliente.cpf;
            clienteArray.endereco = cliente.endereco
        }
        return clienteArray
    }

    deletar(cpf: number) {

        const index = this.clientes.findIndex((value) => value.cpf == cpf);
        this.clientes.splice(index, 1);
        return ("Ok")
    }


}
