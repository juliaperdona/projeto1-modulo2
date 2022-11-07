import { Module } from '@nestjs/common';

import { MotoristasModule } from './motoristas/motoristas.module';
import { ClientesController } from './clientes/clientes.controller';
import { ClienteService } from './clientes/shared/cliente.service/cliente.service';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [MotoristasModule, ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
