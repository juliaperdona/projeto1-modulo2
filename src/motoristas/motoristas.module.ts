import { Module } from '@nestjs/common';
import { MotoristasController } from './motoristas.controller';
import { MotoristasServices } from './shared/motoristas.services/motoristas.services';

@Module({
    controllers: [MotoristasController],
    providers: [MotoristasServices],
})
export class MotoristasModule {}
