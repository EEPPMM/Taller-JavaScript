const productos = [
  { nombre: "Monitor", precio: 200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 60 }
];

productos.sort((a, b) => {
  return a.precio - b.precio;
});

console.log(productos);