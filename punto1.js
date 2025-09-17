
// las variables declaradas con var tienen un ámbito de función
// lo que significa que solo son accesibles dentro de la función donde se declaran 
// si se declaran fuera de una función tienen un ámbito global esto puede causar problemas 
// ya que pueden ser re-declaradas y re-asignadas sin generar un error

function ejemploVar() {
  if (true) {
    var a = 10;
    console.log(a); // Output: 10
  }
  console.log(a); // Output: 10 (La variable es accesible fuera del bloque `if`)
}


// console.log(a); 
// Esto daría un error, 'a' no está definida en este ámbito

//----------------------------------------------------------------------------------------//

// las variables declaradas con let tienen un ámbito de bloque lo que significa que solo son accesibles dentro del 
// bloque de código donde se declaran a diferencia de var no se pueden re-declarar en el mismo ámbito aunque sí se pueden re-asignar

function ejemploLet() {
  let b = 20;
  if (true) {
    let c = 30;
    console.log(b); // Output: 20
    console.log(c); // Output: 30
  }
  // console.log(c); 
  // Esto daría un error, 'c' no está definida fuera del bloque `if`
}


//----------------------------------------------------------------------------------------//

// las variables declaradas con const también tienen un ámbito de bloque La diferencia clave es que una vez asignadas 
// no se pueden re-asignar esto las hace ideales para valores que no deben cambiar

function ejemploConst() {
  const PI = 3.14159;
  // Esto daría un error, PI es una constante y no puede ser re-asignada

  if (true) {
    const d = "Hola";
    console.log(PI); // Output: 3.14159
    console.log(d); // Output: "Hola"
  }
// Esto daría un error, 'd' no está definida fuera del bloque `if`
}
