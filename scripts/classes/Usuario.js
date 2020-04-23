export default class Usuario {
  constructor(nombre, apellidos, correo, edad, activo) {
    //Metodo constructor nos permite definir los atributos que tendra nuestro objeto
    (this.nombre = nombre),
      (this.apellidos = apellidos),
      (this.correo = correo),
      (this.edad = edad),
      (this.activo = activo);
  }

  presentarse() {
    return `Hola, mi nombre es ${this.nombre} ${this.apellidos} y tengo ${this.edad} años.`;
  }

  getNombre() {
    return this.nombre;
  }
  getApellidos() {
    return this.apellidos;
  }
  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }
}
