/*Agrega a cada <li> de la lista un botón "Eliminar". Al hacer clic, debe borrar la tarea correspondiente.*/

document.addEventListener("DOMContentLoaded", function() {
    let lista = document.getElementById("lista");
    lista.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            let li = event.target.parentElement;
            console.log("Eliminando:", li.textContent);
            li.remove();
        }
    });
});


