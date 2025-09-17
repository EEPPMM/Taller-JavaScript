const tareas = [
  "Comprar leche",
  "Pagar la factura del teléfono",
  "Lavar el coche",
  "Estudiar para el examen de JavaScript"
];

const rootDiv = document.getElementById('root');

const listaTareas = document.createElement('ul');

tareas.forEach(tarea => {
  const itemLista = document.createElement('li');
  itemLista.textContent = tarea;
  listaTareas.appendChild(itemLista);
});

rootDiv.appendChild(listaTareas);