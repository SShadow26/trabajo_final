
function validarLetras(input) {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}

function mostrarPista(pistaElement, pista) {
    pistaElement.textContent = "Pista: " + pista;
}

function mostrarSiguientePregunta(actual, siguiente) {
    document.getElementById(actual).style.display = "none";
    document.getElementById(siguiente).style.display = "block";
    }

function mostrarBienvenida() {
    document.getElementById("bienvenida").style.display = "block";
}

    function verificarRespuesta1() {
    var respuesta = document.getElementById("respuesta1").value.toLowerCase();
    var pista1 = document.getElementById("pista1");

    if (respuesta === "html") {
        mostrarSiguientePregunta("pregunta1", "pregunta2");
    } else {
        mostrarPista(pista1, "Hypertext Markup Language");
    }
}

function verificarRespuesta2() {
    var respuesta = document.getElementById("respuesta2").value.toLowerCase();
    var pista2 = document.getElementById("pista2");

    if (respuesta === "internet") {
        mostrarSiguientePregunta("pregunta2", "pregunta3");
    } else {
        mostrarPista(pista2, "Red de computadoras interconectadas a nivel mundial en forma de tela de araña");
    }
}

function verificarRespuesta3() {
    var respuesta = document.getElementById("respuesta3").value.toLowerCase();
    var pista3 = document.getElementById("pista3");

    if (respuesta === "antivirus") {
        mostrarBienvenida();
    } else {
    mostrarPista(pista3, "Detecta la presencia de un virus informático en un disquete o en una computadora y lo elimina");
    }
}