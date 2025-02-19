const suma = (x,y) => x+y;
console.log(suma(10,5));

const saludar = (nombre) => {
    return `${nombre}`
}
console.log(saludar('Jusef'));

const numeros = [1,2,3,4,5,6,7,8]
const multiplicados = numeros.map(num => num*2);
console.log(multiplicados);