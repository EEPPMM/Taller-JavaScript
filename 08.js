/*Dado un arreglo de usuarios con id, encuentra al usuario con id 2 usando .find().
Si no existe, devuelve un objeto vacío {}.
*/

let usuarios = [
    { id: 1, nombre: "Juan"},
    { id:2, nombre: "Ana"},
    { id:3, nombre: "Luis"}  
];

let usuario = usuarios.find(usuarios=>usuarios.id==2);

console.log(usuario || {}); 
