//Filtrar los numeros mayores de un numero. Obntener un array dde numeros, y mostrar en la consola todos los numeros arriva de 5
// Array de números
const arregloDeNumeros = [1, 8, 3, 7, 10, 4, 2];

function filtrarNumeros(numero) {
  const numerosFiltrados = [];
  
  for (let i = 0; i < arregloDeNumeros.length; i++) {
    if (arregloDeNumeros[i] > numero) {
      numerosFiltrados.push(arregloDeNumeros[i]);
    }
  }

  console.log(`Los numeros mayores a ${numero} son: ${numerosFiltrados}`);
}

filtrarNumeros(5);