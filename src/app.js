import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Formulario } from "./components/sections/formulario/Formulario.js";

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

container.appendChild(contactos);
container.appendChild(formulario);

// 🔑 Estado simple
let mostrandoFormulario = false;

// Mostrar / ocultar formulario
btnCrearContacto.addEventListener("click", () => {
    mostrandoFormulario = !mostrandoFormulario;

    if (mostrandoFormulario) {
        contactos.style.display = "none";
        formulario.style.display = "block";
    } else {
        contactos.style.display = "block";
        formulario.style.display = "none";
    }
});

// Mostrar contactos al hacer click en Agenda
btnAgenda.addEventListener("click", () => {
    mostrandoFormulario = false;
    formulario.style.display = "none";
    contactos.style.display = "block";
});
