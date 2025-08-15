import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentasService {

  //establecer el origen de 
  //datos como un arreglo:
     private ventas: Venta[] = [
        new Venta(1, "Pañales", new Date(2025-10-2), "efectivo", 10),
        new Venta(2, "Bodys", new Date(2025-8-3), "tarjeta", 5),
        new Venta(3, "Pañitos", new Date(2025-11-9), "efectivo", 3)
  ];
  create(createVentaDto: CreateVentaDto) {
    return 'This action adds a new venta';
  }

  findAll() {
    return this.ventas;
  }

  findOne(id: number) {
   return this.ventas.find(function(venta){
      return venta.id === id 
    })
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    this.ventas = this.
                  ventas.
                 filter(function(venta){
                 return venta.id !== id
    })
  }
}
