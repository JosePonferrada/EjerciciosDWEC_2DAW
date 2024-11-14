function mostrarTabla(numero) {
    for (let index = 0; index <= 10; index++) {
        document.write(`<p>${numero} x ${index} = ${numero * index}</p>`);
    }
}