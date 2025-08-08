import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';

@Controller('productos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return `aqui se registran los productos`
  }

  @Get()
  findAll() {
    return `aqui se consultan productos`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se consulta el productos por id: ${id}`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectoDto: UpdateProyectoDto) {
    return `aqui se actualiza el producto por id: ${id}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se elimina producto por id: ${id}`
  }
}
