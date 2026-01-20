import { ItemTodolist } from "../../common/itemtodolist/ItemTodolist.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/Storage.js";

let NewtodoForm = () => {
    let form = document.createElement("form");
    form.className = "form-tarea";
    form.style.display = "none";

    let h3 = document.createElement("h3");
    h3.textContent = "Crear Tarea";
    form.appendChild(h3);

    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Tarea";
    inputTitulo.className = "input-tarea";
    form.appendChild(inputTitulo);

    let selectEstado = document.createElement("select");

    ["Pendiente", "Realizada", "Cancelada"].forEach((estado) => {
        let option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;
        selectEstado.appendChild(option);
    });

    form.appendChild(selectEstado);

    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.className = "input-tarea";
    form.appendChild(inputFecha);

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar";
    btnSubmit.className = "btn-agregar";
    form.appendChild(btnSubmit);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const titulo = inputTitulo.value.trim();
        const estado = selectEstado.value;
        const fecha = inputFecha.value;

        if (titulo && fecha) {
            const tareasSection = document.querySelector(".todolist");

            tareasSection.appendChild(ItemTodolist("", titulo, estado, fecha));

            let tarea = {
                titulo: inputTitulo.value,
                estado: estado,
                fecha: fecha
            };

            const tareas = getTasksFromStorage();
            tareas.push(tarea);
            saveTasksToStorage(tareas);

            inputTitulo.value = "";
            inputFecha.value = "";
            selectEstado.value = "Pendiente";

            form.style.display = "none";
            tareasSection.style.display = "block";
        }
    });

    return form;
};

export { NewtodoForm };
