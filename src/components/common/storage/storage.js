const LOCAL_STORAGE_KEY_CONTACTOS = 'list_agenda';
const LOCAL_STORAGE_KEY_TAREAS = 'list_tarea';
 
function saveContactsToStorage(contactos) {
  localStorage.setItem(LOCAL_STORAGE_KEY_CONTACTOS, JSON.stringify(contactos));
}
 
function getContactsFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CONTACTOS)) || [];
}
 
function saveTasksToStorage(tareas) {
  localStorage.setItem(LOCAL_STORAGE_KEY_TAREAS, JSON.stringify(tareas));
}
 
function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TAREAS)) || [];
}
 
export {
  getContactsFromStorage,
  saveContactsToStorage,
  getTasksFromStorage,
  saveTasksToStorage
};