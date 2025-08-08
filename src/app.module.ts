import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [CarsModule, ProyectosModule, VentasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
