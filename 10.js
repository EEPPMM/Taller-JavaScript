/*Crea una función getProducto(id) que devuelva una promesa:
•	Resuelta si el producto existe en un arreglo.
•	Rechazada con un error si no existe.
*/
let getProducto = [
    { id:1, nombre:"switch", precio:1000},
    {id:2,nombre:"asus rog ally", precio:2000},
    {id:3,nombre:"nintendo ds", precio:500}
];

function buscarProducto(id){
    return new Promise((resolve,reject)=>{
        let producto = getProducto.find(producto=>producto.id===id);    
        if(producto){
            resolve(producto);
        }else{
            reject(new Error("Producto no encontrado"));
        }   
    });
}