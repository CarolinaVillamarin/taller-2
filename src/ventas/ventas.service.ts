import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './entities/venta.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VentasService {
  constructor(private service: PrismaService) {}

  
  create(createVentaDto: CreateVentaDto) {
    return 'This action adds a new venta';
  }

  findAll() {
    return this.service.ventas.findMany();
  }

  findOne(id: number) {
   return this.service.ventas.findFirst({
    })
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    
  }
}
