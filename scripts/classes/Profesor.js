import Usuario from "./Usuario.js";

export default class Profesor extends Usuario {
  constructor(
    nombre,
    apellidos,
    correo,
    edad,
    activo,
    cursosDictados,
    calificacion
  ) {
    //Invocar el metodo constructor de la clase Base
    super(nombre, apellidos, correo, edad, activo);
    this.cursosDictados = cursosDictados;
    this.calificacion = calificacion;
  }
}
