let contador = 0;

//Se ejecuta el bloque de codigo mientras la condicion se cumpla
while (contador <=10) {
    console.log(contador);
    contador++
}

//

let numero =0;
do {
    console.log("Ejecuto mi programa al menos una vez");
    numero++;
} while (numero < 1);


let variable =0;
for (let i = 0; i < 10; i++) {
    variable += i
    
}

console.log("La suma total es:", variable);

const numeros = [10,15,47,80,25];

for (let num of numeros) {
    console.log(num)
    
}

// let respuesta;
// do {
//     respuesta = parseInt(prompt("Porfavor ingresa un numero mayor a 20"));
// } while (respuesta <=20);

// alert("El numero es " +  respuesta);

let text = "Este modulo es increible por que estoy aprendiendo a programar!!";

let vocal = "aeiouAEIOU";

let counter = 0;

let i=0;

while (i<text.length) {
    if (vocal.includes(text[i])) {
        counter++;
    }
    i++;
}