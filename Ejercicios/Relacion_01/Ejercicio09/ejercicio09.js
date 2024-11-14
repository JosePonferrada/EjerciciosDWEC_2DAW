var randomNumber = Math.floor(Math.random() * 100) + 1;
var trysLeft = 10;
var lowerLimit = 1;
var supLimit = 100;


function empezarJuego(numero) {

    if (numero < lowerLimit || numero > supLimit) {
        alert(`El número debe estar entre ${lowerLimit} y ${supLimit}`);
        trysLeft--;
        return;
    }

    trysLeft--;

    if (numero == randomNumber) {
        alert("HAS GANADO!");
        return;
    } else if (numero < randomNumber) {
        alert(`El número buscado es mayor que ${numero}`);
        lowerLimit = numero + 1;
        alert(`El número se encuentra entre ${lowerLimit} y ${supLimit}`);
        console.log(supLimit , lowerLimit , trysLeft);
        // trysLeft--;
    } else {
        alert(`El número buscado es menor que ${numero}`);
        supLimit = numero - 1;
        alert(`El número se encuentra entre ${lowerLimit} y ${supLimit}`);
        // trysLeft--;
    }

    alert(`Te quedan ${trysLeft} intentos`);

    if (trysLeft == 0) {
        alert(`Has perdido! El número buscado era el ${randomNumber}`);
        return;
    }

}