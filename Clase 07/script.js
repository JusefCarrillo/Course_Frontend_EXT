const generador = {
  mostrarContrasena: document.getElementById("mostrarContrasena"),
  checkboxMayusculas: document.getElementById("mayusculas"),
  checkboxMinusculas: document.getElementById("minusculas"),
  checkboxNumeros: document.getElementById("numeros"),
  checkboxSimbolos: document.getElementById("simbolos"),
  botonGenerar: document.getElementById("botonGenerar"),
  textoSeguridad: document.getElementById("textoSeguridad"),

  letrasMayusculas: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  letrasMinusculas: ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeros: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  simbolos: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", "\\", ":", ";", "?", ">", "<", ",", ".", "/", "-", "="],

  longitudContrasena: 10,

  generarContrasena: function() {
    let caracteres = [];
    let opcionesSeleccionadas = 0;

    if (this.checkboxMayusculas.checked) 
    {
      caracteres = caracteres.concat(this.letrasMayusculas);
      opcionesSeleccionadas++;
    }
    if (this.checkboxMinusculas.checked) {
      caracteres = caracteres.concat(this.letrasMinusculas);
      opcionesSeleccionadas++;
    }
    if (this.checkboxNumeros.checked) 
    {caracteres = caracteres.concat(this.numeros);
      opcionesSeleccionadas++;
    }
    if (this.checkboxSimbolos.checked)
     {
      caracteres = caracteres.concat(this.simbolos);
      opcionesSeleccionadas++;
    }

    if (caracteres.length === 0) {
      this.mostrarContrasena.textContent  =  "Selecccione al meno una opcion";
      this.actualizarSeguridad(opcionesSeleccionadas);
      return;
    }

    let contrasena = "";
    for (let i = 0; i < this.longitudContrasena; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres[indiceAleatorio];
    }


    this.mostrarContrasena.textContent = contrasena;
    this.actualizarSeguridad(opcionesSeleccionadas);
  },

  actualizarSeguridad: function(cantidad) {

    switch (cantidad) {
      case 0:
      case 1:
        this.textoSeguridad.textContent = "Insegura";
        this.textoSeguridad.style.color = "red";
         break;
      case 2:
        this.textoSeguridad.textContent = "Baja";
        this.textoSeguridad.style.color = "orange";
        break;
      case 3:
        this.textoSeguridad.textContent = "Media";
        this.textoSeguridad.style.color = "yellow";
        break;
      case 4:
        this.textoSeguridad.textContent = "Ffuerte";
        this.textoSeguridad.style.color = "green";
         break;
      default:
        this.textoSeguridad.textContent =    "Insegura";
        this.textoSeguridad.style.color = "red";
    }
  }
};

generador.botonGenerar.addEventListener("click", function() {
           generador.generarContrasena();
});
