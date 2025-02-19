//sin parametro

function saludar(){
    console.log("Hola Mundo");
}
saludar();

//Funcion con parametros
function saludarAlguien(nombre) {
    console.log("Hola", nombre)
}
saludarAlguien("Jusef");

//Funcion con valor por dedfefcto
function saluddarInvitado(nombre="Querida socia") {
    console.log("Hola bienvenido",nombre);
}
saluddarInvitado();

function multiplicar(a,b) {
    return a*b;
}

let resultado = multiplicar(60,2);
console.log(resultado);