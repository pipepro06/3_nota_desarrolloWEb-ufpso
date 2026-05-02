//botones de los cards para abrir una ventana modal
let botones = document.querySelectorAll(".btn-modal");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        let modal = new bootstrap.Modal(document.querySelector(modalId));
        modal.show();  inst 
    });
});

//validacion del formulario 
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();




    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let message = document.getElementById("message").value
    //Valores didacticos para esta actividad
    const USER_DEFAULT = "prueba@gmail.com";
    const PASSWORD_DEFAULT = "123456";

    if (email === "" || password === "") {
        message.innerHTML = "Todos los campos son obligatorios.";
        message.className = "text-warning";
    }
    else if (email === USER_DEFAULT && password === PASSWORD_DEFAULT) {
        message.innerHTML = "¡Bienvenido al sistema!";
        message.className = "text-success";
    }
    else {
        message.innerHTML = "Error: email o contraseña incorrectos.";
    }
    });