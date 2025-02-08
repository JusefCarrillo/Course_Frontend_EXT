//String
let mensaje = "Hola Mundo";
console.log(mensaje.toUpperCase());

let nombre = "Jusef";
console.log(`Hola ${nombre}`);
console.log('Hola ' + nombre + ' Como estas?');
console.log('Hola', nombre, 'Como  estas?');

//Booleano
let esMayorDeEdad = false;
console.log(esMayorDeEdad && false);

let alumnos = ["Juan","Rebeca","Alan","Nelson"];

console.log(alumnos[3]);

//Añadir
alumnos.push("Osmar");
console.log(alumnos);

console.log(alumnos.length);

//Numeros
let x = 2;

x += 5;// Se puede sustituir por cualquier operador, suma, resta, multiplicacion

console.log(x);

let divicion = 0;
console.log(divicion /0);

// Si aprobe o reprobe
let nota = 5.9;
const notaAprobatoria = 6;

if(nota >= notaAprobatoria){
    console.log("Estas aprobado");
}else{
    console.log("Estas reprobado");
}

let temp = 31;

if(temp > 30){
    console.log("Te estas derritiendo de calor");
} else if(temp >= 21 && temp <= 29){
    console.log("Esta haciendo un clima agradable");
}else{
    console.log("Te estas congelado");
}

let edad = 23;
let resultado = (edad>=18)? "Es mayor de edad":"Es mejor de edad";
console.log(resultado);

//Comparando tipo de dato y valor
console.log( 1 === '1');
//Comparando solamente el valor sin el tipo de dato
console.log( 1 == '1');

let dia = 'Viernes';
switch (dia) {
    case 'Lunes':
        console.log('Inicio semana');
        break;
    case 'Viernes':
        console.log('Viernes perron');
        break;
    default:
        console.log('Otro dia');
        break;
}