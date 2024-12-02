// Añadimos al objeto Math los métodos mcd y mcm.
Math.mcd = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return Math.mcd(b, a % b);
    }
};

Math.mcm = function (a, b) {
    return (a * b) / Math.mcd(a, b);
};

var d = document;

d.getElementById('calcular').addEventListener("click", function() {
    const num1 = parseInt(d.getElementById('num1').value);
    const num2 = parseInt(d.getElementById('num2').value);
    const spanResult = d.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        spanResult.textContent = 'Debes introducir dos números válidos';
        return;
    }

    // Calculamos el MCD y el MCM
    const mcd = Math.mcd(num1, num2);
    const mcm = Math.mcm(num1, num2);

    // Mostramos el resultado en el span
    spanResult.textContent = 'El MCD de: ' + num1 + ' y ' + num2 + ' es= ' + mcd + ' y el MCM es= ' + mcm;

});