import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2)

    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));
    sectionContactos.appendChild(ItemContacto("user.svg" , "Kenneth Caceres" , "42014424"));

    return sectionContactos;
}

export { Contactos};