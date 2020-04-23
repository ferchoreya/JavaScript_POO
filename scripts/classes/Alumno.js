import Usuario from "./Usuario.js";

export default class Alumno extends Usuario {
  constructor(nombre, apellidos, correo, edad, activo, cursosTomados) {
    super(nombre, apellidos, correo, edad, activo);
    this.cursosTomados = cursosTomados;
  }
}
