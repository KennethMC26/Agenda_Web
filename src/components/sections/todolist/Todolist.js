import { ItemTodolist } from "../../common/itemtodolist/ItemTodolist.js";
import { getTasksFromStorage, saveTasksToStorage } from "../../common/storage/Storage.js";

let Todolist = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "todolist";

    let h2 = document.createElement("h2");
    h2.textContent = "Tareas";
    sectionTareas.appendChild(h2);

    let tareas = getTasksFromStorage();

    tareas.forEach((tarea, index) => {

        const onEdit = (nuevoTitulo, nuevoEstado, nuevaFecha) => {
            tareas[index].titulo = nuevoTitulo;
            tareas[index].estado = nuevoEstado;
            tareas[index].fecha = nuevaFecha;
            saveTasksToStorage(tareas);
            window.location.reload();
        };

        const onDelete = () => {
            tareas.splice(index, 1);
            saveTasksToStorage(tareas);
            window.location.reload();
        };

        sectionTareas.appendChild(
            ItemTodolist(
                "toDo.svg",
                tarea.titulo,
                tarea.estado,
                tarea.fecha,
                onEdit,
                onDelete
            )
        );

    });

    return sectionTareas;
};

export { Todolist };
