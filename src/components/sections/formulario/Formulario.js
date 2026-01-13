import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

let FormContacto = () => {
    let form = document.createElement("form");
    form.className = "form-contacto";

    // Título
    let h3 = document.createElement("h3");
    h3.textContent = "Agregar Contacto";
    form.appendChild(h3);

    // Input Nombre
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    inputNombre.className = "input-contacto";
    form.appendChild(inputNombre);

    // Input Teléfono
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "text";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.className = "input-contacto";
    form.appendChild(inputTelefono);

    // Input Icono / Avatar
    let inputIcon = document.createElement("input");
    inputIcon.type = "text";
    inputIcon.placeholder = "Nombre del icono (ej: user.svg)";
    inputIcon.className = "input-contacto";
    form.appendChild(inputIcon);

    // Botón enviar
    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar Contacto";
    btnSubmit.className = "btn-agregar";
    form.appendChild(btnSubmit);

    // Manejo del submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = inputNombre.value.trim();
        const telefono = inputTelefono.value.trim();
        const icono = inputIcon.value.trim() || "user.svg";

        if (nombre && telefono) {
            // Seleccionamos la sección donde agregar contactos
            const sectionContactos = document.querySelector(".contactos");
            const nuevoContacto = ItemContacto(icono, nombre, telefono);

            // Le agregamos clases internas si queremos aplicar CSS
            nuevoContacto.classList.add("item-contacto");
            const img = nuevoContacto.querySelector("img");
            if(img) img.classList.add("contacto-img");

            sectionContactos.appendChild(nuevoContacto);

            // Limpiar inputs
            inputNombre.value = "";
            inputTelefono.value = "";
            inputIcon.value = "";
        } else {
            alert("Por favor, completa todos los campos");
        }
    });

    return form;
};

export { FormContacto };
