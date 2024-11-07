function inicializar() {
    var $cuadroint = document.getElementById("cuadrointerno");
    var $cuadromed = document.getElementById("cuadromedio");
    var $cuadroext = document.getElementById("cuadroexterno");
    var $fondo = document.getElementById("fondo");
    $cuadroint.addEventListener("click", mostrarInterno, false);
    $cuadromed.addEventListener("click", mostrarMedio, false);
    $cuadroext.addEventListener("click", mostrarExterno, false);
    $fondo.addEventListener("click", mostrarFondo, false);
}
function mostrarExterno() {
    alert("cuadro externo");
}
function mostrarMedio() {
    alert("cuadro medio");
}
function mostrarInterno() {
    alert("cuadro interno");
}
function mostrarFondo() {
    alert("fondo");
}