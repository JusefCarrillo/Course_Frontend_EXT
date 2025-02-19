//funcion anonima

const anonima = function() {
    console.log("Hola mundo");
}

anonima();

//Callback
setTimeout(function(){
    console.log("Este comenatio tieene un tiempo de espera");
},5000);

//Arrow function
const arrowFunction = () => {
    console.log("Hola es una flecha =>");
}

arrowFunction();

document.getElementById("btn").addEventListener("click", function (params) {
    alert("Hola munddo")
});
