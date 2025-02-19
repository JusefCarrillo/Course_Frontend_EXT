//Crear operaciones matematicas, suma, resta multiplicacion y diviciom
function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    
      return a / b;

  }
  
  const a = 10;
  const b = 5;
  
  console.log(`La suma de ${a} y ${b} es: ${sumar(a, b)}`);
  console.log(`La resta de ${a} y ${b} es: ${restar(a, b)}`);
  console.log(`La multiplicación de ${a} y ${b} es: ${multiplicar(a, b)}`);
  console.log(`La división de ${a} y ${b} es: ${dividir(a, b)}`);
  