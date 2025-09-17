/*4. Desestructuración de objetos y arreglos
Dado el objeto:
const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};
Obtén con desestructuración: titulo, duracion y el primer tema.
*/

const curso = {
  titulo: "JavaScript",
  duracion: 40,
  temas: ["Funciones", "Objetos", "Asincronía"]
};

const { titulo, duracion, temas: [primerTema] } = curso;


console.log(titulo,duracion,primerTema); 
