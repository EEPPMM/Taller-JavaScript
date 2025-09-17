const usuario = {
  nombre: "Carlos",
  email: "carlos@example.com",
  esActivo: true,
  roles: ["admin", "editor"]
};

const usuarioJSON = JSON.stringify(usuario);

console.log("Objeto original:", usuario);
console.log("Objeto como cadena JSON:", usuarioJSON);

localStorage.setItem('usuarioData', usuarioJSON);

console.log("Datos guardados en localStorage.");

const datosRecuperados = localStorage.getItem('usuarioData');

console.log("Cadena JSON recuperada:", datosRecuperados);

const usuarioRecuperado = JSON.parse(datosRecuperados);

console.log("Objeto recuperado:", usuarioRecuperado);

console.log("Nombre del usuario recuperado:", usuarioRecuperado.nombre);