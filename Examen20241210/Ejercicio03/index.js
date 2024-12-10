var d = document;

const parrafo = d.getElementById('parrafo');

const botonInvertir = d.getElementById('invertir');
const botonCrear = d.getElementById('crear');
const botonConvertir = d.getElementById('convertir');
const botonOcultar = d.getElementById('ocultar');

botonInvertir.addEventListener("click", function() {
    const texto = d.getElementById('parrafo').textContent;
    const palabras = texto.split(' ');
    const palabrasAlReves = palabras.reverse().join(' ');
    d.getElementById('resultado').innerHTML = palabrasAlReves;
});


botonCrear.addEventListener("click", function() {
    // Mostramos el botón ocultar
    botonOcultar.style.display = "inline-block";
});

botonOcultar.addEventListener("click", function() {
    // Ocultamos el botón ocultar
    botonOcultar.style.display = "none";
});

// Al presionar F12 cambiamos el fondo del párrafo
document.addEventListener("keydown", function(e) {
    if (e.key === "F12") {
        parrafo.style.backgroundColor = "yellow";
        parrafo.style.color = "blue";
    }
});


botonConvertir.addEventListener("click", function() {
    const lista = d.createElement('select');
    const mayusculas = d.createElement('option');
    const minusculas = d.createElement('option');

    mayusculas.textContent = "Convertir a mayúsculas";
    minusculas.textContent = "Convertir a minúsculas";

    lista.appendChild(mayusculas);
    lista.appendChild(minusculas);

    // Insertamos la lista debajo del párrafo y antes de los botones
    parrafo.parentNode.insertBefore(lista, botonInvertir);

    lista.addEventListener("change", function() {
        if (lista.value === "Convertir a mayúsculas") {
            parrafo.textContent = parrafo.textContent.toUpperCase();
        } else {
            parrafo.textContent = parrafo.textContent.toLowerCase();
        }
    });
});