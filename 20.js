/*Crea una simulación de carrito de compras con:
•	Arreglo de productos { id, nombre, precio }.
•	Función agregarAlCarrito(id) que añada productos.
•	Función mostrarCarrito() que liste productos y calcule el total.
•	Validar que no se repitan productos en el carrito.
*/

let productos = [
    { id:1, nombre:"switch", precio:1000},
    {id:2,nombre:"asus rog ally", precio:2000},
    {id:3,nombre:"nintendo ds", precio:500}
];  
let carrito = [];

function agregarAlCarrito(id){  
    let producto = productos.find(producto=>producto.id===id);
    if(producto){
        let enCarrito = carrito.find(item=>item.id===id);
        if(!enCarrito){
            carrito.push(producto);
            return `${producto.nombre} agregado al carrito.`;
        }else{
            return `${producto.nombre} ya está en el carrito.`;
        }
    }else{
        return "Producto no encontrado.";
    }
}

function mostrarCarrito(){
    if(carrito.length===0){
        return "El carrito está vacío.";
    }

    let total = carrito.reduce((suma, item)=>suma + item.precio, 0);
    let listaProductos = carrito.map(item=>`${item.nombre} - $${item.precio}`).join("\n");
    return `Productos en el carrito:\n${listaProductos}\nTotal: $${total}`;
}

console.log(agregarAlCarrito(1));
console.log(agregarAlCarrito(2));
console.log(agregarAlCarrito(1));
console.log(mostrarCarrito());
console.log(agregarAlCarrito(3));
console.log(mostrarCarrito());  
console.log(agregarAlCarrito(4));