//Le indicamos que la clase Curso, sea una clase exportada (export default)
export default class Curso {
    constructor(nombre,poster,clases) {
        this.nombre = nombre
        this.poster = poster
        this.clases = clases
        this.inscritos = []
    }
    //Getters y setters
    setNombre(nombre) {
        this.nombre = nombre
    }

    getNombre() {
        return this.nombre
    }

    setPoster(poster) {
        this.poster = poster
    }

    getPoster() {
        return this.poster
    }

    setClases(clases) {
        this.clases = clases
    }

    getClases() {
        return this.clases
    }

    setInscritos(inscritos) {
        this.inscritos = inscritos
    }

    getInscritos() {
        return this.inscritos
    }
}