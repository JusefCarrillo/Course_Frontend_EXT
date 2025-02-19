var globalVar = "Soy una variable global"

function saludar() {
    console.log(globalVar);
}

saludar();

//function scope
function benvenida() {
    let mensaje = "Hola a todos";
    console.log(mensaje)
}
benvenida();
//Si se quiere accedder a la variable dedsde fuera causa error
//console.log(mensaje);

//Block Scope
if (true) {
    let blockScope_let = "Solo existe en este bloque tipó let";
    var blockScope_var = "Solo existe en este bloque tipo var";
    console.log(blockScope_let);
}
//Solamente se puede accededr a la variable dentro del bloque
//ReferenceError: blockScope is not defined
//console.log(blockScope_let);
console.log(blockScope_var);


//console.log(variable);
//let variable = 'Hola!';

