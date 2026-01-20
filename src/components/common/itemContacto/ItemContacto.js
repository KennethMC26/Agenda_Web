let ItemContacto = (imgContacto, nombre, telefono, onEdit, onDelete) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let img = document.createElement("img");
    img.src = `./assets/icons/${imgContacto}`;
    img.className = "contacto-img";

    let nombreH3 = document.createElement("h3");
    nombreH3.textContent = nombre;

    let telefonoP = document.createElement("p");
    telefonoP.textContent = telefono;

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
    div.appendChild(nombreH3);
    div.appendChild(telefonoP);
    div.appendChild(botonesDiv);

    btnEditar.addEventListener("click", (e) => {
        e.stopPropagation();

        let formEdit = document.createElement("form");
        formEdit.className = "form-edit-contacto";

        let inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.value = nombre;
        inputNombre.required = true;

        let inputTelefono = document.createElement("input");
        inputTelefono.type = "text";
        inputTelefono.value = telefono;
        inputTelefono.required = true;

        let btnGuardar = document.createElement("button");
        btnGuardar.type = "submit";
        btnGuardar.textContent = "Guardar";

        formEdit.appendChild(inputNombre);
        formEdit.appendChild(inputTelefono);
        formEdit.appendChild(btnGuardar);

        div.innerHTML = "";
        div.appendChild(formEdit);

        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            onEdit(inputNombre.value.trim(), inputTelefono.value.trim());
        });
    });

    btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation();
        onDelete();
    });

    return div;
};

export { ItemContacto };
