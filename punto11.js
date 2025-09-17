let getProducto = [
    { id:1, nombre:"switch", precio:1000},
    {id:2,nombre:"asus rog ally", precio:2000},
    {id:3,nombre:"nintendo ds", precio:500}
];

function buscarProducto(id){
    return new Promise((resolve,reject)=>{
        let producto = getProducto.find(producto => producto.id === id);    
        if(producto){
            resolve(producto);
        } else {
            reject(new Error("Producto no encontrado"));
        }
    });
}

async function obtenerYMostrarProducto(id) {
    try {
        const productoEncontrado = await buscarProducto(id);
        console.log("Producto encontrado:", productoEncontrado);
    } catch (error) {
        console.error("Error:", error.message);
    }
}


console.log("--- Buscando un producto que existe (ID: 2) ---");
obtenerYMostrarProducto(2);

console.log("\n--- Buscando un producto que NO existe (ID: 99) ---");
obtenerYMostrarProducto(99);