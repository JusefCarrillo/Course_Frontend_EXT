let userData;

document.addEventListener("DOMContentLoaded", function () {
    userData = JSON.parse(localStorage.getItem("loggedUser"));

    if (!userData) {
        window.location.href = "index.html";
        return;
    }

    mostrarComentarios();
});

function postComment() {
    const commentText = document.getElementById('comment').value;
    const fecha = new Date().toLocaleString();

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const newComment = {
        userName: userData.userName,
        name: userData.userName,
        imagen: userData.imagen,
        commentText: commentText,
        fecha: fecha
    };

    let comments = JSON.parse(localStorage.getItem('coments')) || [];
    comments.push(newComment);
    localStorage.setItem('coments', JSON.stringify(comments));

    document.getElementById('comment').value = "";
    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    let comments = JSON.parse(localStorage.getItem('coments')) || [];

    commentSection.innerHTML = '';

    comments.forEach((comment, index) => {
        const comentarioSeccion = document.createElement('section');
        comentarioSeccion.classList.add("comentario");

        const imagenUser = document.createElement('img');
        imagenUser.classList.add("comentario-imagen");
        imagenUser.src = comment.imagen;

        const comentarioTexto = document.createElement('div');
        comentarioTexto.classList.add("comentario-texto");

        const comentarioInfo = document.createElement('div');
        comentarioInfo.classList.add("comentario-info");
        comentarioInfo.innerHTML = `<strong>${comment.name}</strong> - ${comment.fecha}`;

        const comentarioCuerpo = document.createElement('p');
        comentarioCuerpo.classList.add("comentario-cuerpo");
        comentarioCuerpo.textContent = comment.commentText;

        comentarioTexto.appendChild(comentarioInfo);
        comentarioTexto.appendChild(comentarioCuerpo);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-comment-button');
        deleteButton.addEventListener('click', () => {
            comments.splice(index, 1);
            localStorage.setItem('coments', JSON.stringify(comments));
            mostrarComentarios();
        });

        comentarioSeccion.appendChild(imagenUser);
        comentarioSeccion.appendChild(comentarioTexto);
        comentarioSeccion.appendChild(deleteButton);

        commentSection.appendChild(comentarioSeccion);
    });

    document.getElementById('comment').value = "";
}
