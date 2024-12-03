var d = document;

// Crear el tablero de 10x10 como tabla HTML
let tabla = d.createElement("table");
tabla.style.border = "1px solid black";
tabla.style.borderCollapse = "collapse";

for (let i = 0; i < 10; i++) {
    let fila = d.createElement("tr");
    for (let j = 0; j < 10; j++) {
        let celda = d.createElement("td");
        celda.style.border = "1px solid black";
        celda.style.width = "30px";
        celda.style.height = "30px";
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
}
d.body.appendChild(tabla);

// Función para comprobar si se puede colocar un barco sin tocar otro
function puedeColocarBarco(fila, columna, longitud, orientacion) {
    for (let i = -1; i <= longitud; i++) {
        for (let j = -1; j <= 1; j++) {
            let checkFila = orientacion === 0 ? fila + j : fila + i;
            let checkColumna = orientacion === 0 ? columna + i : columna + j;
            if (
                checkFila >= 0 && // Si la fila es mayor o igual a 0
                checkFila < 10 && // y la fila es menor a 10
                checkColumna >= 0 && // y la columna es mayor o igual a 0
                checkColumna < 10 && // y la columna es menor a 10
                tabla.rows[checkFila].cells[checkColumna].style.backgroundColor === "black" // y la celda es negra
            ) {
                return false;
            }
        }
    }
    return true;
}

// Función para colocar un barco en el tablero
function colocarBarco(longitud) {
    let colocado = false;

    while (!colocado) {
        let fila = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
        let columna = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
        let orientacion = Math.floor(Math.random() * 2); // 0 = horizontal, 1 = vertical

        if (
            (orientacion === 0 && columna + longitud <= 10 // Si la orientación es horizontal y la columna + longitud es menor o igual a 10
                && puedeColocarBarco(fila, columna, longitud, orientacion)) // y puede colocar el barco sin tocar otro 
            ||
            (orientacion === 1 && fila + longitud <= 10 && puedeColocarBarco(fila, columna, longitud, orientacion)) // Si la orientación es vertical y la fila + longitud es menor o igual a 10 y puede colocar el barco sin tocar otro
        ) {
            for (let i = 0; i < longitud; i++) { // Coloreamos las celdas del barco 
                if (orientacion === 0) {
                    tabla.rows[fila].cells[columna + i].style.backgroundColor = "black";
                } else {
                    tabla.rows[fila + i].cells[columna].style.backgroundColor = "black";
                }
            }
            colocado = true; // Ponemos colocado a true para salir del bucle ya que hemos colocado un barco
        }
    }
}

// Funciones de cada barco
function colocarPortaviones(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        colocarBarco(4);
    }
}

function colocarAcorazados(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        colocarBarco(3);
    }
}

function colocarDestructores(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        colocarBarco(2);
    }
}

function colocarFragatas(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        colocarBarco(1);
    }
}

// Función para colocar todos los barcos
function colocarBarcos() {
    colocarPortaviones(1);
    colocarAcorazados(2);
    colocarDestructores(3);
    colocarFragatas(2);
}

// Le ponemos al botón del HTML el evento que inicia todo previamente limpiando el tablero
d.addEventListener("DOMContentLoaded", function () {
    d.getElementById("btnIniciar").addEventListener("click", function () {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                tabla.rows[i].cells[j].style.backgroundColor = "";
            }
        }
        colocarBarcos();
    });
});