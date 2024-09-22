function mostrarTexto(numero){
    if (numero % 2 === 0 && numero >= 10) {
        document.write("Número correcto");
    } else document.write("Número incorrecto");
}