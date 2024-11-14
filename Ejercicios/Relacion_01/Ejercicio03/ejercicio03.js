function mostrarTriangulo(lado1, lado2, lado3) {

    // Suponemos que es un triángulo si lado1 + lado2 > lado3
    if (lado1 + lado2 < lado3) {
        alert("No es un triángulo");
    } else {
        if (lado1 === lado2 && lado1 === lado3) {
            alert ("Es un triángulo equilátero");
        } else {
            if (lado1 == lado2 || lado2 == lado3 || lado1 == lado2) {
                alert ("Es un triángulo isósceles");
            } else alert ("Es un triángulo escaleno");
        }
    }
    

    // Con un operador ternario

    // (lado1 + lado2 > lado3) ? alert("Es un triángulo") : alert("No es un triángulo");
}