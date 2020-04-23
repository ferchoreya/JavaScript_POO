//Para hacer uso de una clase exportada, en este archivo la vamos a importar
import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";
/* 
NOTA: No basta con tener una clase exportada e importarla donde se va a utilizar,
ya que esto provoca el siguiente error en el navegador: 
Uncaught SyntaxError: Cannot use import statement outside a module
Por lo que debemos agregar en el HTML que se utiliza como modulo
<script type="module" src="scripts/index.js"></script>
*/

/*  Para hacerlo más dinámico, nosotros le vamos a dar la posibilidad al usuario de crear cursos
//Instanciamos objetos de la clase Curso
//Forma 1
const html = new Curso(
  "HTML desde cero",
  "https://blog.megacursos.com/wp-content/uploads/2018/04/HTML5-2-710x434.jpg",
  10
);
const css = new Curso(
  "CSS desde cero",
  "https://unioninformatica.org/wp-content/uploads/2016/11/css-3-educacion-comunidad-curso.jpg",
  8
);
const js = new Curso(
  "JavaScript desde cero",
  "https://adictosaltrabajo.com/wp-content/uploads/2018/05/el_remozado_javascript.imagen-1068x512.jpg",
  22
); */

const elemCurso = document.getElementById("cursos");

/*
 * Imprime un curso en el DOM
 * Recibe un objeto tipo Curso
 */
function mostrarCurso(curso) {
  const hijo = document.createElement("div");
  hijo.classList.add("Card");
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
        <div class="s-center">
            <span class="small">Cantidad de clases: ${curso.getClases()}</span>
        </div>
    </div>
    <br><br><br>
`;
  elemCurso.appendChild(hijo);
}

/*  Para hacerlo más dinámico, nosotros le vamos a dar la posibilidad al usuario de crear cursos
//Invocaciones a la función mostra curso.
//Forma 1
mostrarCurso(html);
mostrarCurso(css);
mostrarCurso(js);
*/

//Forma 2
//Creamos un curso desde un formulario
const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const target = evento.target; //Contiene todo el formulario
  const curso = new Curso(
    target.nombreCurso.value,
    target.imagenCurso.value,
    target.numeroClases.value
  );
  mostrarCurso(curso);
  target.nombreCurso.value = "";
  target.imagenCurso.value = "";
  target.numeroClases.value = "";
});

//TODO: Realizar el formulario para el profesor
const profe = new Profesor(
  "Fernado",
  "Reyes",
  "fernando.reyes@softtek.com",
  37,
  true,
  ["HTML", "CSS", "JS", "Node.js"],
  10
);
console.log(profe);

//TODO: Realizar el formulario para el alumno
const alumno1 = new Alumno(
  "FAbiola",
  "Mendez",
  "fabimend23@gmail.com",
  27,
  true,
  ["HTML", "CSS", "JavaScript"]
);
console.log(alumno1);
const alumno2 = new Alumno(
  "Juanito",
  "Perez",
  "juanitoperez23@gmail.com",
  29,
  false,
  ["Base Datos", "Node.js"]
);
console.log(alumno2);

const cursoHTML = new Curso("HTML desde cero", "mi-poster.jpg", 14);
//De esta forma falla, es decir, se reemplazan los valores
/* cursoHTML.setInscritos([alumno1]);
console.log(cursoHTML);
cursoHTML.setInscritos([alumno2]);
console.log(cursoHTML); */
//Por lo que implementamos la siguiente solución ... spread operators
//Spread operator: permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
cursoHTML.setInscritos([...cursoHTML.getInscritos(), alumno1]);
console.log(cursoHTML);
cursoHTML.setInscritos([...cursoHTML.getInscritos(), alumno2]);
console.log(cursoHTML);
