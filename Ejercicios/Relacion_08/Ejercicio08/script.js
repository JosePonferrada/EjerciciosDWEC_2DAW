// Si pasamos el ratón por encima de un div, cambiamos el color de fondo de la página
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

// Si sacamos el ratón de un div, lo volvemos a poner su color original
function restaurarColorFondo() {
    document.body.style.backgroundColor = "";
}

// Selección de todos los divs
const divs = document.querySelectorAll("div");

// Le asignamos a los divs los eventos
divs.forEach(div => {
    div.addEventListener("mouseover", () => cambiarColorFondo(div.style.backgroundColor)); // Arrow function para pasar el color de fondo del div
    div.addEventListener("mouseout", restaurarColorFondo);
});

// Otra forma de hacerlo
/* document.addEventListener("mouseover", (e) => {
    if(e.target.matches("#div1")) {
        cambiarColorFondo(e.target.style.backgroundColor);
    }
    if(e.target.matches("#div2")) {
        cambiarColorFondo(e.target.style.backgroundColor);
    }
    if(e.target.matches("#div3")) {
        cambiarColorFondo(e.target.style.backgroundColor);
    }
    if(e.target.matches("#div4")) {
        cambiarColorFondo(e.target.style.backgroundColor);
    }
}); */