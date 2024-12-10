var d = document;
// Asimismo que el identificador de la planta siga el patrón: dos dígitos menores de 6, tres letras Mayúsculas, 1 guión  bajo o alto y 2 letras minúsculas 
const patron = new RegExp("^[0-5]{2}[A-Z]{3}[_-]{1}[a-z]{2}$");
var valorIdPlanta = d.getElementById("idPlanta").value;
var idPlanta = d.getElementById("idPlanta");
var formulario = d.getElementById("formulario");
var botonEnviar = d.getElementById("enviar");
var botonLimpiar = d.getElementById("limpiar");
var textareaObserv = d.getElementById("observacionesPlanta");

// Para validar el ID de la planta
function validacionID(patron) {
    if (patron.test(idPlanta.value)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Crear por delegación de eventos el botón click para identificar cuándo hacemos clic en el botón Enviar o en 
el botón Limpiar, y en caso de hacer clic en limpiar, debe poner todo a blanco y el nivel de luz a “Media”, 
mientras que si hacemos clic en “Enviar” debe inhabilitar el envío de información al servidor, pero mostrar 
toda la información introducida en el formulario por consola
 */
d.addEventListener("click", function (e) {
    if (e.target === botonEnviar) {
        e.preventDefault();

        if (validacionID(patron)) {
            console.log("ID de la planta: " + idPlanta.value);
            console.log("Nombre de la planta: " + d.getElementById("nombrePlanta").value);
            console.log("Nombre de especie: " + d.getElementById("especiePlanta").value);
            // Mostrar opción de radio seleccionada
            var radio = d.getElementsByName("tipoPlanta");
            for (var i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                    console.log("Tipo de planta: " + radio[i].value);
                }
            }

            /* // Mostrar texto textarea
            if (textareaObserv.value === "") {
                d.getElementById("observacionesPlanta").style.backgroundColor = "red";
                d.getElementById("observacionesPlanta").style.color = "white";
                d.getElementById("observacionesPlanta").placeholder = "Puede escribir aquí sus observaciones";
            } else {
                console.log("Observaciones: " + textareaObserv.value);
            } */

            console.log("Nivel de luz: " + d.getElementById("nivelLuz").value);
        } else {
            console.log("No se ha podido enviar el formulario el ID de la planta no cumple con el patrón");
        }

    } else if (e.target === botonLimpiar) {
        formulario.reset();
        // Seleccionamos el select media y lo ponemos por defecto

        d.getElementById("nivelLuz").value = "Media";
    }
});


// Teclas válidas para el textarea
textareaObserv.addEventListener("keypress", function (e) {
    var tecla = e.key;
    if (!/^[a-zA-Z0-9\s]*$/.test(tecla)) {
        e.preventDefault();
        alert("Carácter no válido");
    }
});

/**
 * al hacer click en cualquiera de las 
opciones  del  tipo  de  planta,  cuidados  especiales  o  nivel  de  luz,  debe 
aparecer justo debajo del textarea un cuadro con fondo rojo y texto blanco 
que indique al usuario que puede escribir en el textarea las observaciones 
que desee
 */

d.addEventListener("click", function (e) {
    if (e.target === d.querySelector("input[type=radio]")) {
        d.getElementById("observacionesPlanta").style.backgroundColor = "red";
        d.getElementById("observacionesPlanta").style.color = "white";
        d.getElementById("observacionesPlanta").placeholder = "Puede escribir aquí sus observaciones";
    } else if (e.target === d.querySelector("input[checkbox]")) {
        d.getElementById("observacionesPlanta").style.backgroundColor = "red";
        d.getElementById("observacionesPlanta").style.color = "white";
        d.getElementById("observacionesPlanta").placeholder = "Puede escribir aquí sus observaciones";
    } else if (e.target === d.querySelector("select")) {
        d.getElementById("observacionesPlanta").style.backgroundColor = "red";
        d.getElementById("observacionesPlanta").style.color = "white";
        d.getElementById("observacionesPlanta").placeholder = "Puede escribir aquí sus observaciones";
    }
});