import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "./db.js";

let Contactos = () => {
    let section = document.createElement("section");
    section.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    section.appendChild(h2);

    ContactList.forEach((contact) => {
        section.appendChild(ItemContacto("user.svg",contact.nombre, contact.telefono));
    })

    return section;
};

export { Contactos };
