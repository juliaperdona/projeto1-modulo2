import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Motorista } from './shared/motorista/motorista';
import { MotoristasServices } from './shared/motoristas.services/motoristas.services';

@Controller('motoristas')
export class MotoristasController {

    constructor(
        private motoristasService : MotoristasServices
        ){  }


        @Get()
             async buscarMotoristas(
            @Query('page')page = 1,  
            @Query('size')size = 10){

            return  this.motoristasService.buscarMotoristas(page, size)
        }

    
   
 
        @Get(':cpf')
        async getByNome(@Param('cpf') cpf:number) : Promise<Motorista>{
              return this.motoristasService.getByCpf(cpf);
          }

        @Post()
        async criar (@Body() motorista: Motorista): Promise<Motorista>{
            return this.motoristasService.criar(motorista);
        }
        @Put(":cpf")
        async editar (@Param('cpf') cpf: number, @Body() motorista: Motorista): Promise<Motorista>{
            motorista.cpf = cpf;
            return this.motoristasService.editar(motorista);
        }

        @Delete(":cpf")
        async deletar(@Param("cpf") cpf:number) {
            this.motoristasService.deletar(cpf)
        }
}
