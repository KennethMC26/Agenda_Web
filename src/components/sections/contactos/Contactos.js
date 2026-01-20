import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";
import { getContactsFromStorage, saveContactsToStorage } from "../../common/storage/Storage.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    let contactos = getContactsFromStorage();

    contactos.forEach((contact, index) => {

        const onEdit = (nuevoNombre, nuevoTelefono) => {
            contactos[index].nombre = nuevoNombre;
            contactos[index].telefono = nuevoTelefono;
            saveContactsToStorage(contactos);
            window.location.reload();
        };

        const onDelete = () => {
            contactos.splice(index, 1);
            saveContactsToStorage(contactos);
            window.location.reload();
        };

        sectionContactos.appendChild(
            ItemContacto(
                "user.svg",
                contact.nombre,
                contact.telefono,
                onEdit,
                onDelete
            )
        );

    });

    return sectionContactos;
};

export { Contactos };
