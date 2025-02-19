//Contar los digitos de un numero
//El usuario ingresara un numero y como resultado se mostara la cantidad de digitos que escribio

let numero1 = prompt("Por favor, ingresa un número:");
let cantidadDigitos1 = numero1.length;

alert("El número que ingresaste tiene " + cantidadDigitos1 + " dígitos.");


//Aplicando un ciclo while
let numero2 = prompt("Por favor, ingresa un número:");
let cantidadDigitos2 = 0;
let i = 0;

while (i < numero2.length) {
    cantidadDigitos2++;
    i++;
}

alert("El número que ingresaste tiene " + cantidadDigitos2 + " dígitos.");
