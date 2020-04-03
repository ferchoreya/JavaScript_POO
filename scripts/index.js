//Para hacer uso de una clase exportada, en este archivo la vamos a importar
import Curso from "./classes/Curso.js"
/* 
NOTA: No basta con tener una clase exportada e importarla donde se va a utilizar,
ya que esto provoca el siguiente error en el navegador: 
Uncaught SyntaxError: Cannot use import statement outside a module
Por lo que debemos agregar en el HTML que se utiliza como modulo
<script type="module" src="scripts/index.js"></script>
*/
const html = new Curso("HTML desde cero","https://cdn.svgporn.com/logos/html-5.svg",10)

const elemCurso = document.getElementById("curso")
elemCurso.innerHTML = `
    <img src="${html.getPoster()}" style="max-width: 120px; heigth: 120px" />
    <h3>${html.getNombre()}</h3>
    <span>Cantidad de clases: ${html.getClases()}</span>
`