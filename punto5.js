
const configBase = {
  theme: 'dark',
  font: 'Arial',
  notifications: true
};


const configClon = { ...configBase };


const configExtendido = {
  ...configBase,
  layout: 'sidebar',
  notifications: false 
};

console.log("Configuración Original:", configBase);
console.log("Configuración Clonada:", configClon);
console.log("Configuración Extendida:", configExtendido);
console.log("Notificaciones originales:", configBase.notifications);

//-------------------------------------------------------------------------------//

function calcularPromedio(...numeros) {
 
  if (numeros.length === 0) {
    return 0; 
  }
  
  const suma = numeros.reduce((acumulador, numeroActual) => {
    return acumulador + numeroActual;
  }, 0);
  
  return suma / numeros.length;
}

console.log("Promedio de 5, 10, 15:", calcularPromedio(5, 10, 15));
console.log("Promedio de 2, 4, 6, 8, 10:", calcularPromedio(2, 4, 6, 8, 10));
console.log("Promedio de 100:", calcularPromedio(100));
console.log("Promedio de 25, 75:", calcularPromedio(25, 75));
console.log("Promedio de 0 números:", calcularPromedio()); 