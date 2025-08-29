import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { VentasModule } from './ventas/ventas.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [CarsModule, ProyectosModule, VentasModule, PrismaModule, MarcasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
