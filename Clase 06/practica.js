function agregarComentario() {
    var textAreaComentario = document.getElementById("textAreaComentario");
    var contenedorComentarios = document.getElementById("contenedorComentarios");

    if (textAreaComentario.value.trim() !== "") {
        var cajaComentario = document.createElement("div");
        cajaComentario.className = "caja-comentario";

        var textoComentario = document.createElement("p");
        textoComentario.textContent = textAreaComentario.value;
        cajaComentario.appendChild(textoComentario);

        var marcaDeTiempo = document.createElement("p");
        marcaDeTiempo.textContent = "Publicado el: " + new Date().toLocaleString();
        cajaComentario.appendChild(marcaDeTiempo);

        var botonEliminar = document.createElement("button");
        botonEliminar.className = "boton-eliminar";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            contenedorComentarios.removeChild(cajaComentario);
        };
        cajaComentario.appendChild(botonEliminar);

        contenedorComentarios.appendChild(cajaComentario);

        // Limpiar el campo de texto después de agregar el comentario
        textAreaComentario.value = "";
    }
}
