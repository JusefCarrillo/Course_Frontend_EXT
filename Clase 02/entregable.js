// Genera una nota aleatorria entre 0 y 100
let nota = Math.floor(Math.random() * 101);

// verificarr el valor de la nota
if (nota >= 90) {
    console.log("El estudiante aprueba Excelente");
} else if (nota >= 75 && nota <= 89) {
    console.log("El estudiante aprueba Bien");
} else if (nota >= 60 && nota <= 74) {
    console.log("El estudiante aprueba con Suficiente");
} else if (nota < 60) {
    console.log("El estudiante no aprueba");
} else {
    console.log("Nota no válida");
}
