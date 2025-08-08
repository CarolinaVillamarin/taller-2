import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller()
export class AppController {


//endpoint:un metodo e una 
// clase que resive una request y puede enviar una respuesta

  @Get()
  getMensajes(): string {
    return "aqui se van a consultar datos";
  }

@Post()
//despues de los dos puntos va el tipo de dato de retorno:
//lo que va a devover la funcion on el return
crear(): string {
  return "aqui se van a registrar datos";
}

@Patch()
actualizar() : string {
  return "aqui se van a modificar datos";
}

@Delete()
borrar() : string {
  return "aqui se van a borrar datos";
}

}
