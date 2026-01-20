import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Formulario } from "./components/sections/formulario/Newcontacto.js";
import { Todolist } from "./components/sections/todolist/Todolist.js";
import { NewtodoForm } from "./components/sections/newtodoform/NewtodoForm.js";

// App
let nav = document.getElementById("nav");
let container = document.getElementById("container");

// Botones
const btnAgenda = Button("Agenda", "agenda", "user.svg");
const btnCrearContacto = Button("Crear Contacto", "plus", "add.svg");
const btnTodo = Button("ToDoList", "todolist", "toDo.svg");
const btnCrearTarea = Button("Crear Tarea", "plus", "add.svg");

nav.appendChild(btnAgenda);
nav.appendChild(btnCrearContacto);
nav.appendChild(btnTodo);
nav.appendChild(btnCrearTarea);

// Secciones
const contactos = Contactos();
const formulario = Formulario();
const todolist = Todolist();
const formTarea = NewtodoForm();

container.appendChild(contactos);
container.appendChild(formulario);
container.appendChild(todolist);
container.appendChild(formTarea);
contactos.style.display = "block";
formulario.style.display = "none";
todolist.style.display = "none";
formTarea.style.display = "none";

// Estados
let mostrandoFormulario = false;
let mostrandoFormularioTarea = false;

// Crear Contacto
btnCrearContacto.addEventListener("click", () => {
    mostrandoFormulario = !mostrandoFormulario;

    if (mostrandoFormulario) {
        contactos.style.display = "none";
        formulario.style.display = "block";
        todolist.style.display = "none";
        formTarea.style.display = "none";
    } else {
        contactos.style.display = "block";
        formulario.style.display = "none";
    }
});

// Agenda
btnAgenda.addEventListener("click", () => {
    mostrandoFormulario = false;
    mostrandoFormularioTarea = false;

    formulario.style.display = "none";
    todolist.style.display = "none";
    formTarea.style.display = "none";

    contactos.style.display = "block";
});

// ToDoList
btnTodo.addEventListener("click", () => {
    mostrandoFormulario = false;
    mostrandoFormularioTarea = false;

    contactos.style.display = "none";
    formulario.style.display = "none";
    formTarea.style.display = "none";

    todolist.style.display = "block";
});

// Crear Tarea
btnCrearTarea.addEventListener("click", () => {
    mostrandoFormularioTarea = !mostrandoFormularioTarea;

    if (mostrandoFormularioTarea) {
        todolist.style.display = "none";
        formTarea.style.display = "block";
        contactos.style.display = "none";
        formulario.style.display = "none";
    } else {
        todolist.style.display = "block";
        formTarea.style.display = "none";
    }
});

console.log("completado");
