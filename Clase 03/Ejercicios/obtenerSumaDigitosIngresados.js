//Obtener la suma de los digitos de un numero
//El usuario ingresara un numero y como resultado se mostara la suma consecutivo de los digitos

let numero = prompt("Por favor, ingresa un número:");
let suma = 0;

for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
}

alert("La suma de los dígitos consecutivos es " + suma);
