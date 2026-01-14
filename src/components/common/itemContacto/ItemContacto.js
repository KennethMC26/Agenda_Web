let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let img = document.createElement("img");
    img.src = `./assets/icons/${imgContacto}`;
    img.className = "contacto-img"; // 👈 CLAVE

    let nombreP = document.createElement("p");
    nombreP.textContent = nombre;

    let telefonoP = document.createElement("p");
    telefonoP.textContent = telefono;

    div.appendChild(img);
    div.appendChild(nombreP);
    div.appendChild(telefonoP);

    return div;
};

export { ItemContacto };
