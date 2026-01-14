import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "../contactos/db.js";

let Formulario = () => {
    let form = document.createElement("form");
    form.className = "form-contacto";
    form.style.display = "none"; // oculto por defecto

    let h3 = document.createElement("h3");
    h3.textContent = "Crear Contacto";
    form.appendChild(h3);

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    inputNombre.className = "input-contacto";
    form.appendChild(inputNombre);

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "text";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.className = "input-contacto";
    form.appendChild(inputTelefono);

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar";
    btnSubmit.className = "btn-agregar";
    form.appendChild(btnSubmit);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = inputNombre.value.trim();
        const telefono = inputTelefono.value.trim();

        if (nombre && telefono) {
            const contactosSection = document.querySelector(".contactos");

            // Agregar contacto nuevo
            contactosSection.appendChild(ItemContacto("user.svg", nombre, telefono));
            let contacto = {
                nombre: inputNombre.value,
                telefono: inputTelefono.value
            };
            console.log(contacto);

            // Limpiar inputs
            inputNombre.value = "";
            inputTelefono.value = "";

            // Ocultar formulario y mostrar contactos
            form.style.display = "none";
            contactosSection.style.display = "block";


            ContactList.push(contactosSection);
        }
    });
    
    return form;
};

export { Formulario };
