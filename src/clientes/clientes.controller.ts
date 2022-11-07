import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ClienteService } from './shared/cliente.service/cliente.service';
import { Cliente } from './shared/cliente/cliente';

@Controller('clientes')
export class ClientesController {

    constructor(
        private clientesServices : ClienteService
        ){  }

        @Get()
        async buscarClientes(
       @Query('page')page = 1,  
       @Query('size')size = 10){

       return  this.clientesServices.buscarClientes(page, size,)
   }
 
        @Get(':cpf')
        async getByNome(@Param('cpf') cpf:number) : Promise<Cliente>{
              return this.clientesServices.getByCpf(cpf);
          }

        @Post()
        async criar (@Body() cliente: Cliente): Promise<Cliente>{
            return this.clientesServices.criar(cliente);
        }
        @Put(":cpf")
        async editar (@Param('cpf') cpf: number, @Body() cliente: Cliente): Promise<Cliente>{
            cliente.cpf = cpf;
            return this.clientesServices.editar(cliente);
        }

        @Delete(":cpf")
        async deletar(@Param("cpf") cpf:number) {
            this.clientesServices.deletar(cpf)
        }

}
