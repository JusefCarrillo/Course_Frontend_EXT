console.log('Hola Mundo');
console.log("-----------------------------");

// Tipos de Dato Primitivos
let nombre = "Jusef"; // String
console.log("Variable: nombre");
console.log("Tipo de dato: " + typeof nombre);
console.log("Valor: " + nombre);
console.log("-----------------------------");

let edad = 23; // Number
console.log("Variable: edad");
console.log("Tipo de dato: " + typeof edad);
console.log("Valor: " + edad);
console.log("-----------------------------");

let esMayorDeEdad = true; // Boolean
console.log("Variable: esMayorDeEdad");
console.log("Tipo de dato: " + typeof esMayorDeEdad);
console.log("Valor: " + esMayorDeEdad);
console.log("-----------------------------");

let saldo; // Undefined
console.log("Variable: saldo");
console.log("Tipo de dato: " + typeof saldo);
console.log("Valor: " + saldo);
console.log("-----------------------------");

let cuenta = null; // Null
console.log("Variable: cuenta");
console.log("Tipo de dato: " + typeof cuenta);
console.log("Valor: " + cuenta);
console.log("-----------------------------");

let id = Symbol("id"); // Symbol
console.log("Variable: id");
console.log("Tipo de dato: " + typeof id);
console.log("Valor: " + id.toString());
console.log("-----------------------------");

let numberGrande = 123456789123465798n; // BigInt
console.log("Variable: numberGrande");
console.log("Tipo de dato: " + typeof numberGrande);
console.log("Valor: " + numberGrande);
console.log("-----------------------------");

let persona = {
    nombre: "Jusef",
    edad: 29,
    nacionalidad: "Mexicano"
}; // Object
console.log("Variable: persona");
console.log("Tipo de dato: " + typeof persona);
console.log("Valor del objeto persona: " + JSON.stringify(persona));
console.log("Valor de nombre: " + persona.nombre);
console.log("Valor de edad: " + persona.edad);
console.log("Valor de nacionalidad: " + persona.nacionalidad);
console.log("-----------------------------");

let arrayNumeros = [1, 2, 3, 4, 5]; // Array
console.log("Variable: arrayNumeros");
console.log("Tipo de dato: " + typeof arrayNumeros);
console.log("Valor: " + arrayNumeros);
console.log("-----------------------------");

let suma = function suma(a, b) { return a + b; }; // Function
console.log("Variable: suma");
console.log("Tipo de dato: " + typeof suma);
console.log("Valor: " + suma.toString());
console.log("-----------------------------");

console.log("Resultado de hacer la funcion suma");
console.log("Sumar 2 + 5");
console.log(suma(2, 5));
console.log("-----------------------------");

let fecha = new Date(); // Date
console.log("Variable: fecha");
console.log("Tipo de dato: " + typeof fecha);
console.log("Valor: " + fecha);
console.log("-----------------------------");
