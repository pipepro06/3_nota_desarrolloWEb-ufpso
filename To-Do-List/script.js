// Obtener elementos del DOM
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let totalTareas = 0;

// Función para actualizar contador
function actualizarContador() {
    contador.textContent = totalTareas;
}

// Función para crear tarea
function agregarTarea(texto) {
    const li = document.createElement("li");
    li.textContent = texto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    botonEliminar.addEventListener("click", function () {
        lista.removeChild(li);
        totalTareas--;
        actualizarContador();
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    totalTareas++;
    actualizarContador();
}

// Evento submit
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = inputTarea.value.trim();

    if (texto !== "") {
        agregarTarea(texto);
        inputTarea.value = "";
    }
});