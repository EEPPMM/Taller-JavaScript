function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function operar(a, b, callback) {
  return callback(a, b);
}

let resultadoSuma = operar(10, 5, sumar);
console.log("10 + 5 =", resultadoSuma); 


let resultadoResta = operar(20, 8, restar);
console.log("20 - 8 =", resultadoResta); 


let resultadoMultiplicacion = operar(7, 4, multiplicar);
console.log("7 * 4 =", resultadoMultiplicacion); 