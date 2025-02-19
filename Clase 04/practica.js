const librosLeidos = [];

function agregarLibro(libro) {
  librosLeidos.push(libro);
}

function mostrarLibrosLeidos() {
  console.log("Libros leídos:");
  for (let index = 0; index < librosLeidos.length; index++) {
    console.log(`${index + 1}. ${librosLeidos[index]}`);
  }
}

agregarLibro("Cien años de soledad");
agregarLibro("Quiubole con el SAT");
agregarLibro("La biblia");
mostrarLibrosLeidos();
