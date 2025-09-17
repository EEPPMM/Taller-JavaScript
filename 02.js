/*Crea una función que reciba un objeto usuario con nombre y rol, y retorne:
El usuario Ana tiene el rol de administrador. usando template literals.
*/

function describirUsuario(usuario) {
    return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}.`;
}

//const nombre = prompt("Ingrese el nombre del usuario:");
//const rol = prompt("Ingrese el rol del usuario:");

const usuario = { 
    nombre: "ana", 
    rol: "administrador",
};

function presentacion(usuario) {
    return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}.`;
}

console.log(presentacion(usuario));