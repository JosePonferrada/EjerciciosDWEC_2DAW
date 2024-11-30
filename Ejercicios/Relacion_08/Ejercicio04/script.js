var d = document;

d.addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = parseInt(d.getElementById('num').value);

    // Para calcular el factorial lo vamos a hacer de forma recursiva
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    // Lo pasamos al span
    d.getElementById('mensaje').textContent = `El factorial de ${numero} es de ${factorial(numero)}.`;
});