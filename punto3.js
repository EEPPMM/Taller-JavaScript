function verificarNumero(numero) {
  return numero > 0 ? "Positivo" : (numero < 0 ? "Negativo" : "Cero");
}

console.log(verificarNumero(10)); 
console.log(verificarNumero(-5)); 
console.log(verificarNumero(0));  