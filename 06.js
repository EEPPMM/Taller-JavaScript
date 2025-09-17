/*Dado el arreglo:
let numeros = [3, 8, 12, 5, 20, 7];
Obtén el doble de los números mayores que 6 usando .filter() y .map() encadenados.
*/

let numeros = [3, 8, 12, 5, 20, 7];
let resultados = numeros.filter(numero=>numero>6).map(numero=>numero*2);

console.log(resultados);