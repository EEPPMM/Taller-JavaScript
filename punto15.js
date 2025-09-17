class Tarea {
  constructor(titulo) {
    this.titulo = titulo;
    this.estado = "pendiente"; 
  }

  toggleEstado() {
    if (this.estado === "pendiente") {
      this.estado = "completada";
    } else {
      this.estado = "pendiente";
    }
  }
}

const miTarea = new Tarea("Preparar la presentación del taller");

console.log("Estado inicial:", miTarea); 

miTarea.toggleEstado();
console.log("Estado después del primer toggle:", miTarea); 

miTarea.toggleEstado();
console.log("Estado después del segundo toggle:", miTarea); 