var d = document;

d.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = d.getElementById('nombre').value;
    const edad = d.getElementById('edad').value;
    const salario = d.getElementById('salario').value;

    let salarioFinal = salario;

    /* Crear una aplicación Web que pida en la misma el nombre, edad y salario base de una persona (no hace falta
    validar los datos), de modo que al final muestre un nuevo cuadro de texto denominado salario final, cuyo
    contenido se rellenará de acuerdo a los siguientes supuestos:
    a. Si el salario es superior a 2000 euros no se le hace ningún ajuste adicional.
    b. Si el salario está entre 1000 y 2000 euros y la persona es mayor de 50 años el salario final será el salario base
    incrementado en un 10%, pero si la persona cobra ese salario con edad inferior a 50 el salario base se
    incrementará solo en un 5%.
    c. Si el salario es menor de 1000 euros y la edad se encuentra entre 50 y 60 años, el salario base se verá
    incrementado en un 15%, mientras que si la persona es menor de 50 años, el salario base se incrementa
    solamente un 7,5%, y, si la persona tiene más de 60 años, el salario base se incrementará en un 20% */

    if (salario < 2000 && salario >= 1000) {
        if (edad >= 50) {
            salarioFinal = salario * 1.10;
        } else { // Si la persona tiene menos de 50 años
            salarioFinal = salario * 1.05;
        }
    }

    if (salario < 1000) {
        if (edad >= 50 && edad <= 60) {
            salarioFinal = salario * 1.15;
        } else if (edad < 50) {
            salarioFinal = salario * 1.075;
        } else { // Si la persona tiene más de 60 años
            salarioFinal = salario * 1.20;
        }
    }

    d.getElementById('mensaje').textContent = `El salario final de ${nombre} es de ${salarioFinal} euros.`;

});