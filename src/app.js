import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { FormContacto } from "./components/sections/formulario/Formulario.js";

// App
let app = document.getElementById("app");

// Section menu
let nav = document.getElementById("nav");
nav.appendChild(Button("Agenda", "agenda", "user.svg"));
nav.appendChild(Button("Crear Contacto", "plus", "add.svg"));
nav.appendChild(Button("ToDoList", "todolist", "toDo.svg"));
nav.appendChild(Button("Crear Tarea", "plus", "add.svg"));

// Section container
let container = document.getElementById("container");
container.appendChild(Contactos());
container.appendChild(FormContacto());



// Cargar DOM