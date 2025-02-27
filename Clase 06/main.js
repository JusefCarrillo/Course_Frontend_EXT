let titulo = document.getElementById("titulo")
 titulo.innerText = "Don Quijote de la Mancha"
  titulo.style.color = "gray"


let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "Es de las mejores historias que leido en mi vida"

document.body.appendChild(nuevoParrafo)

let nuevoParrafo2 = document.createElement("p")
nuevoParrafo2.innerText = "Es de las mejores historias que leido en mi vida"
document.body.insertBefore(nuevoParrafo2, titulo)

function retraso() {
    setTimeout(() => {
        let parrafotercero = document.createElement("p")
        parrafotercero.innerText = "Voy a aparecer 3s despues"
        document.body.appendChild(parrafotercero)
    }, 3000);
}

retraso();

document.getElementById('boton').addEventListener("click",)