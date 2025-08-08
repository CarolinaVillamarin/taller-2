import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() createVentaDto: CreateVentaDto) {
    return `aqui se registran las ventas`
  }

  @Get()
  findAll() {
    return `aqui se consultan las ventas`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se consultan las ventas por id:${id}`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return `aqui se actualizan las ventas por id:${id}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se eliminan las ventas por id:${id}`
  }
}
