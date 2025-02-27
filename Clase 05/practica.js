// Definición del objeto Libro
class Libro {
    constructor(titulo, autor, anio, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
      this.estado = estado;
      this.capitulos = [];
    }
  
    describbirLibro() {
      return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }
  
    agregarrCapitulo(capitulo) {
      this.capitulos.push(capitulo);
    }
  
    eliminarCapitulo(indice) {
      if (indice >= 0 && indice < this.capitulos.length) {
        this.capitulos.splice(indice, 1);
      }
    }
  }
  
 
  const laDivinaComedia = new Libro('La Divina Comedia', 'Dante Alighieri', 1320, 'disponible');
  

  console.log("-----------------Descripcion de libro-----------------");
  console.log(laDivinaComedia.describbirLibro());
  

  laDivinaComedia.agregarrCapitulo('Capítulo 1: Infierno');
  laDivinaComedia.agregarrCapitulo('Capítulo 1.2 Tepito');
  laDivinaComedia.agregarrCapitulo('Capítulo 2: Purgatorio');
  laDivinaComedia.agregarrCapitulo('Capítulo 3: Paraíso');
  
  console.log("-----------------Lista de capitulos del libro-----------------");
  console.log(laDivinaComedia.capitulos);
  console.log("-----------------Eliominando capitulo erquivocado-----------------");
  console.log(laDivinaComedia.capitulos[1]);
  laDivinaComedia.eliminarCapitulo(1);
  console.log("-----------------Lista de capitulos correctps-----------------");
  console.log(laDivinaComedia.capitulos);  