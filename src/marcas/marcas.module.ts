import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';


@Module({
  imports: [PrismaModule],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}
