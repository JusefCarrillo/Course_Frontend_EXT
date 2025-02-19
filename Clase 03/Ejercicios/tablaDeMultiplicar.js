//Realizar una tabla de multiplicar
//El usuario ingresara un numero y resultara la tabla de multiplicar del 1 al 10


numero = parseInt(prompt("Ingrese el numero para obtener la tabla"));

let respuesta = "";
for (let index = 1; index <= 10; index++) {
    respuesta += numero + " x " + index + " = " + (numero * index) + "\n";
}

alert(respuesta);
//PARA EJECUTAR INICIAR INDEX