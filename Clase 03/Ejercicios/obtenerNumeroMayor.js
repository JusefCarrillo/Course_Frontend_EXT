//Encontrar el  numero mayor de un arreglo

let numeros = [11, 5, 9, 45, 1, 20];
let numeroMayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
}

console.log("El número mayor del arreglo es " + numeroMayor);

let suma = 0; let numero = 1; while (suma < 5) { suma += numero; numero++; } console.log(suma);