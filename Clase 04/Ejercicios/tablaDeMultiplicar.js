//Seleccionar un ejecrcioci ed otra clase y convertilo en funcion
// Función para generar la tabla de multiplicar para un número dado
function generarTablaDeMultiplicar(numero) {
    let respuesta = "";
    for (let index = 1; index <= 10; index++) {
      respuesta += numero + " x " + index + " = " + (numero * index) + "\n";
    }
    return respuesta; // Devolver la tabla como una cadena
  }
  
  // Ejemplo de uso
  const numero = 5;
  console.log(generarTablaDeMultiplicar(numero));
  