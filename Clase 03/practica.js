// Arreglo donde vienen las frutas que vamos a categorizaRE
const frutas = ['manzana roja', 'banana', 'manzana verde', 'pera', 'piña', 'banana', 'mandarina', 'cereza', 'aguacate', 'melón', 'mora', 'papaya'];

// Arreglos que contiene las frutas por tuipo quie econtre en internet
const dulces = ['banana', 'sandía', 'cereza', 'higo', 'melón', 'manzana roja'];
const semidulces = ['papaya', 'mango', 'pera', 'uva', 'guanábana'];
const acidas = ['guayaba', 'fresa', 'frambuesa', 'limón', 'mora', 'piña', 'toronja', 'maracuyá', 'naranja', 'arándano rojo'];
const semiAcidas = ['ciruelas', 'tomate', 'mandarina', 'granada', 'manzana verde', 'durazno'];
const neutras = ['coco', 'aguacate'];

// Se declaran y se inicializan las variables donde se contaran las frutas por el tipo
//Para el ciclo for
let cantidadDulcesFor = 0;
let cantidadSemidulcesFor = 0;
let cantidadAcidasFor = 0;
let cantidadSemiAcidasFor = 0;
let cantidadNeutrasFor = 0;

//Para el ciclo while
let cantidadDulcesWhile = 0;
let cantidadSemidulcesWhile = 0;
let cantidadAcidasWhile = 0;
let cantidadSemiAcidasWhile = 0;
let cantidadNeutrasWhile = 0;

// Usar un solo ciclo for para contar cada tipo de fruta
for (let i = 0; i < frutas.length; i++) {
    if (dulces.includes(frutas[i])) {
      cantidadDulcesFor++;
    } else if (semidulces.includes(frutas[i])) {
      cantidadSemidulcesFor++;
    } else if (acidas.includes(frutas[i])) {
      cantidadAcidasFor++;
    } else if (semiAcidas.includes(frutas[i])) {
      cantidadSemiAcidasFor++;
    } else if (neutras.includes(frutas[i])) {
      cantidadNeutrasFor++;
    }
}

// Mostrar la cantidad de cada tipo de fruta usando ciclo for
console.log('----------Registros usando el coclo For----------');
console.log(`Dulces: ${cantidadDulcesFor}`);
console.log(`Semidulces: ${cantidadSemidulcesFor}`);
console.log(`Ácidas: ${cantidadAcidasFor}`);
console.log(`Semi ácidas: ${cantidadSemiAcidasFor}`);
console.log(`Neutras: ${cantidadNeutrasFor}`);



// Usar un ciclo while para contar cada tipo de fruta
let i = 0;
while (i < frutas.length) {
    if (dulces.includes(frutas[i])) {
        cantidadDulcesWhile++;
    } else if (semidulces.includes(frutas[i])) {
        cantidadSemidulcesWhile++;
    } else if (acidas.includes(frutas[i])) {
        cantidadAcidasWhile++;
    } else if (semiAcidas.includes(frutas[i])) {
        cantidadSemiAcidasWhile++;
    } else if (neutras.includes(frutas[i])) {
        cantidadNeutrasWhile++;
    }
    i++;
}


console.log('----------Registros usando el coclo While----------');
console.log(`Dulces: ${cantidadDulcesWhile}`);
console.log(`Semidulces: ${cantidadSemidulcesWhile}`);
console.log(`Ácidas: ${cantidadAcidasWhile}`);
console.log(`Semi ácidas: ${cantidadSemiAcidasWhile}`);
console.log(`Neutras: ${cantidadNeutrasWhile}`);
