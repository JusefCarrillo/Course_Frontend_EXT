const users = [ 
     {name:"Jusef Carrillo",userName: "jusefC", password: "123", imagen:"https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     {name:"Rebeca Yamile",userName: "RebeY", password: "123", imagen:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     {name:"Jhon Doe",userName: "JhonD", password: "123", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHDTm2rNhAIXMVemCxqle9INtbzKsYcce4Q&s"},
]


function login() {
    const userNamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.userName === userNamePage && user.password === passwordPage);

    if (userFind) {
         localStorage.setItem("loggedUser", JSON.stringify(userFind));
         window.location.href = "home.html";
    } else {
         error.textContent = "Usuario o contraseña incorrectos";
    }
}
