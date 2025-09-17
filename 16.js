/*Usando un arreglo, implementa funciones para crear, leer, actualizar y eliminar tareas.
.”*/

let tareas = [
    {id:1, descripcion:"Comprar golosinas", completada:false},
    {id:2, descripcion:"organizar casa", completada:true},
    {id:3, descripcion:"Estudiar JavaScript", completada:false}
];  

function crearTarea(descripcion){
    let nuevaTarea = {
        id: tareas.length + 1,
        descripcion: descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    return nuevaTarea;
}       
function leerTareas(){
    return tareas;
}
function actualizarTarea(id, descripcion, completada){
    let tarea = tareas.find(tarea => tarea.id === id);  
    if(tarea){
        tarea.descripcion = descripcion !== undefined ? descripcion : tarea.descripcion;
        tarea.completada = completada !== undefined ? completada : tarea.completada;
        return tarea;
    }
    return null;
}
function eliminarTarea(id){
    let indice = tareas.findIndex(tarea => tarea.id === id);
    if(indice !== -1){
        return tareas.splice(indice, 1)[0];
    }
    return null;
}

console.log("Tareas iniciales:", leerTareas());
console.log("Crear tarea:", crearTarea("Aprender promesas"));
console.log("Actualizar tarea:", actualizarTarea(2, "Organizar la casa", true));
console.log("Eliminar tarea:", eliminarTarea(1));
console.log("Tareas finales:", leerTareas());   
