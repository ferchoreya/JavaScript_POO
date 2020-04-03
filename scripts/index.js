//Para hacer uso de una clase exportada, en este archivo la vamos a importar
import Curso from "./classes/Curso.js"
/* 
NOTA: No basta con tener una clase exportada e importarla donde se va a utilizar,
ya que esto provoca el siguiente error en el navegador: 
Uncaught SyntaxError: Cannot use import statement outside a module
Por lo que debemos agregar en el HTML que se utiliza como modulo
<script type="module" src="scripts/index.js"></script>
*/

//Instanciamos objetos de la clase Curso
const html = new Curso("HTML desde cero","https://blog.megacursos.com/wp-content/uploads/2018/04/HTML5-2-710x434.jpg",10)
const css = new Curso("CSS desde cero","https://unioninformatica.org/wp-content/uploads/2016/11/css-3-educacion-comunidad-curso.jpg",8)


const elemCurso = document.getElementById("cursos")

/*
* Imprime un curso en el DOM
* Recibe un objeto tipo Curso
*/
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
    hijo.innerHTML = `
    <img src="${curso.getPoster()}" style="height:150px"/>
    <h3>${curso.getNombre()}</h3>
    <span>Cantidad de clases: ${curso.getClases()}</span> 
    <br><br><br>
`
elemCurso.appendChild(hijo)
}

//Invocaciones a la función mostra curso.
mostrarCurso(html)
mostrarCurso(css)