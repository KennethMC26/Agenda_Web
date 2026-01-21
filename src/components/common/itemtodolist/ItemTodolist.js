let ItemTodolist = (iconTarea, titulo, estado, fecha, onEdit, onDelete) => {

    let div = document.createElement("div");
    div.className = "item-tarea";

    let img = document.createElement("img");
    img.src = `./assets/icons/${iconTarea}`;
    img.className = "tarea-img";

    let contenidoDiv = document.createElement("div");
    contenidoDiv.className = "contenido-tarea";

    let tituloH3 = document.createElement("h3");
    tituloH3.textContent = titulo;

    let estadoP = document.createElement("p");
    estadoP.textContent = estado;
    estadoP.className = estado.toLowerCase() === "realizada" ? "completada" : "pendiente";

    let fechaP = document.createElement("p");
    fechaP.textContent = fecha;

    contenidoDiv.appendChild(tituloH3);
    contenidoDiv.appendChild(estadoP);
    contenidoDiv.appendChild(fechaP);

    let botonesDiv = document.createElement("div");
    botonesDiv.className = "botones-item";

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";

    botonesDiv.appendChild(btnEditar);
    botonesDiv.appendChild(btnEliminar);

    div.appendChild(img);
    div.appendChild(contenidoDiv);
    div.appendChild(botonesDiv);

    btnEditar.addEventListener("click", (e) => {
        e.stopPropagation();

        let formEdit = document.createElement("form");
        formEdit.className = "form-edit-tarea";

        let inputTitulo = document.createElement("input");
        inputTitulo.type = "text";
        inputTitulo.value = titulo;
        inputTitulo.required = true;

        let selectEstado = document.createElement("select");

        ["Pendiente", "Realizada", "Cancelada"].forEach((est) => {
            let option = document.createElement("option");
            option.value = est;
            option.textContent = est;
            selectEstado.appendChild(option);
        });

        selectEstado.value = estado;

        let inputFecha = document.createElement("input");
        inputFecha.type = "date";
        inputFecha.value = fecha;

        let btnGuardar = document.createElement("button");
        btnGuardar.type = "submit";
        btnGuardar.textContent = "Guardar";

        formEdit.appendChild(inputTitulo);
        formEdit.appendChild(selectEstado);
        formEdit.appendChild(inputFecha);
        formEdit.appendChild(btnGuardar);

        div.innerHTML = "";
        div.appendChild(formEdit);

        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();

            if (typeof onEdit === "function") {
                onEdit(
                    inputTitulo.value.trim(),
                    selectEstado.value,
                    inputFecha.value
                );
            }
        });
    });

    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation();

        if (typeof onDelete === "function") {
            onDelete();
        }
    });

    return div;
};

export { ItemTodolist };
