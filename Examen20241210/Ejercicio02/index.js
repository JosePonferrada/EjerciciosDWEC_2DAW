var d = document;

/**
 * Crear  una  matriz  de  10X10  que  se  rellene  con  números  aleatorios  entre  10  y  80  y  mostrarla  en  pantalla. 
Mostrar justo debajo la matriz en la que por cada fila de la matriz  se inviertan las posiciones par e impar 
consecutiva  y aparezca justo debajo de la original
 */

// Crear el tablero de 10x10 como tabla HTML
let tabla = d.createElement("table");
tabla.style.border = "1px solid black";
tabla.style.borderCollapse = "collapse";
tabla.style.marginBottom = "20px";

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


// Rellenamos los huecos con números entre 10 y 80
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        tabla.rows[i].cells[j].innerText = Math.floor(Math.random() * (80 - 10 + 1) + 10);
    }
}

// Justo debajo de la primera vamos a mostrar la matriz con las posiciones invertidas

// ======================================== SEGUNDA TABLA ========================================

let tablaInvertida = d.createElement("table");
tablaInvertida.style.border = "1px solid black";
tablaInvertida.style.borderCollapse = "collapse";

for (let i = 0; i < 10; i++) {
    let fila = d.createElement("tr");
    for (let j = 0; j < 10; j++) {
        let celda = d.createElement("td");
        celda.style.border = "1px solid black";
        celda.style.width = "30px";
        celda.style.height = "30px";
        fila.appendChild(celda);
    }
    tablaInvertida.appendChild(fila);
}
d.body.appendChild(tablaInvertida);

// Rellenamos los huecos con los números de la tabla original
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        tablaInvertida.rows[i].cells[j].innerText = tabla.rows[i].cells[j].innerText;
    }
}

// Invertimos las posiciones par e impar consecutivas
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j % 2 === 0) {
            tablaInvertida.rows[i].cells[j].innerText = tabla.rows[i].cells[j + 1].innerText;
        } else {
            tablaInvertida.rows[i].cells[j].innerText = tabla.rows[i].cells[j - 1].innerText;
        }
    }
}