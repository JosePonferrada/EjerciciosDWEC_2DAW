const boton = document.getElementById('mostrar');
const parrafos = document.querySelectorAll('p');

let indice = 0;

function mostrarParrafo() {
    
    if (indice < parrafos.length) {
        setTimeout(() => {
            parrafos[indice].style.display = 'block';
            indice++;
            mostrarParrafo(); // Llamada recursiva para no tener que pulsar el botón para que aparezca el siguiente párrafo
        }, 1000); // Cada segundo aparece un párrafo
    } else {
        // Le ponemos un timeout al alert para que aparezca después de que se muestren todos los párrafos
        setTimeout(() => {
            alert('Ya no hay más párrafos que mostrar');
        }, 2000); // Con 2 segundos nos aseguramos de que se muestren todos los párrafos antes de mostrar el alert
    }

}

// Asignamos el evento al botón
boton.addEventListener('click', mostrarParrafo);