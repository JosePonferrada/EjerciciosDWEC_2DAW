var d = document;

d.getElementById("generar").addEventListener("click", function(){
    const cuerpoTabla = d.getElementById("cuerpoTabla");
    const numerosElegidos = generarNumerosElegidos(6, 49); // Generamos los números

    cuerpoTabla.innerHTML = ""; // Limpiamos la tabla

    let numero = 1;
    for (let fila = 0; fila < 7; fila++) {
        const filaElement = document.createElement("tr");

        for (let columna = 0; columna < 7; columna++) {
            const celda = document.createElement("td");

            if (numero <= 49) { // Solo mostramos los números del 1 al 49
                celda.textContent = numero; // Mostramos el número en la celda

                // Marcamos la celda si está en los números seleccionados
                if (numerosElegidos.includes(numero)) {
                    celda.classList.add("marcado");
                    celda.textContent = "X"; // Cambiar el número por "X"
                }
                numero++;
            }

            filaElement.appendChild(celda); // Añadimos la celda a la fila
        }
        cuerpoTabla.appendChild(filaElement); // Añadimos la fila al cuerpo de la tabla
    }

});

function generarNumerosElegidos(cantidad, numMax) {
    const numeros = new Set(); // Set para que no se repitan los números

    while (numeros.size < cantidad) {
        numeros.add(Math.floor(Math.random() * numMax) + 1);
    }

    return Array.from(numeros); // Convertimos el Set a Array para poder usar includes

}