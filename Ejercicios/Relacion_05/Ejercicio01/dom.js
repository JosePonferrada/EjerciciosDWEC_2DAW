var d = document;
var enlaces = d.querySelectorAll('a');

// Para ver cuántos enlaces hay en la página
console.log("Enlaces: " + enlaces.length);

// Para acceder al penúltimo enlace
console.log("Penúltimo enlace: " + enlaces[enlaces.length - 2].href);

// Otra manera de acceder al penúltimo enlace
console.log("Penúltimo enlace: " + enlaces[enlaces.length - 2].getAttribute('href'));

// Número de enlaces que apuntan a marca.es
var enlacesMarca = 0;
for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].href === "http://www.marca.es/") {
        enlacesMarca++;
    }
}

console.log("Número de enlaces que apuntan al marca.es: " + enlacesMarca);

// Número de enlaces del tercer párrafo
var parrafos = d.querySelectorAll('p');
var enlacesTercerParrafo = parrafos[2].querySelectorAll('a');

console.log("Número de enlaces del tercer párrafo: " + enlacesTercerParrafo.length);

// Otra forma de hacerlo todo en una sola línea
console.log("Número de enlaces del tercer párrafo: " + d.querySelectorAll('p')[2].querySelectorAll('a').length);