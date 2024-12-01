const parrafos = document.querySelectorAll('p');

// Ahora cada párrafo lo separamos en palabras y guardamos la primera palabra
parrafos.forEach(parrafo => {
    const palabras = parrafo.textContent.split(' ');
    const primeraPalabra = palabras[0];
    const restoParrafo = palabras.slice(1).join(' '); // Unimos el resto de palabras en un string separadas por un espacio quitando la primera palabra

    // Mostramos solo la primera palabra pero guardamos el resto del parrafo en un span
    parrafo.innerHTML = `<span class="primera-palabra">${primeraPalabra}</span> <span class="resto-parrafo" style="display:none;">${restoParrafo}</span>`;

    // Ahora seleccionamos el span que acabamos de crear
    const primeraPalabraSpan = parrafo.querySelector('.primera-palabra');
    const restoParrafoSpan = parrafo.querySelector('.resto-parrafo');

    // Mostramos el parrafo completo al pasar el ratón por encima de la palabra
    primeraPalabraSpan.addEventListener('mouseover', () => {
        restoParrafoSpan.style.display = 'inline'; // Lo mostramos justo a continuación de la primera palabra
    });

    // Volvemos a mostrar solo la primera palabra al quitar el ratón de la palabra
    primeraPalabraSpan.addEventListener('mouseout', () => {
        restoParrafoSpan.style.display = 'none';
    });

});

