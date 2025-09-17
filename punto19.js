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

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = "Eliminar";

  itemLista.appendChild(botonEliminar);
  listaTareas.appendChild(itemLista);
});

listaTareas.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const liAEliminar = event.target.parentNode;
    liAEliminar.remove();
  }
});

rootDiv.appendChild(listaTareas);