import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClienteService } from './shared/cliente.service/cliente.service';

@Module({

    controllers:[ClientesController],
    providers: [ClienteService]

})
export class ClientesModule {}
