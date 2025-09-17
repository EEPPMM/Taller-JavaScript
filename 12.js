/*Crea un arreglo posts. Implementa funciones con promesas que simulen:
•	Obtener todos los posts.
•	Obtener un post por id.
•	Agregar un nuevo post.  */
let posts = [
    {id:1, nombre:"switch", precio:1000},
    {id:2,nombre:"asus rog ally", precio:2000},
    {id:3,nombre:"nintendo ds", precio:500}
];

function obtenerPosts(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(posts);
        },1000);
    }); 

}

function obtenerPostPorId(id){
    return new Promise((resolve,reject)=>{
        let post = posts.find(post=>post.id===id);
        if(post){
            resolve(post);
        }else{
            reject(new Error("Post no encontrado"));
        }
    });
}      

function agregarPost(nuevoPost){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            posts.push(nuevoPost);
            resolve(nuevoPost);
        },1000);
    }); 

}


obtenerPosts()
    .then((todosPosts)=>{
        console.log("Todos los posts:", todosPosts);
        return obtenerPostPorId(2);
    })
    .then((post)=>{
        console.log("Post con ID 2:", post);
        return agregarPost({id:4, nombre:"playstation 5", precio:500});
    })
    .then((nuevoPost)=>{
        console.log("Nuevo post agregado:", nuevoPost);
        return obtenerPosts();
    })
    .then((todosPostsActualizados)=>{
        console.log("Todos los posts actualizados:", todosPostsActualizados);
    })
    .catch((error)=>{
        console.error(error);
    }); 
