class Fraccion {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    getNumerador() {
        return this.numerador;
    }

    getDenominador() {
        return this.denominador;
    }

    setNumerador(newNumerador) {
        this.numerador = newNumerador;
    }

    setDenominador(newDenominador) {
        this.denominador = newDenominador;
    }

    // Imprimir fracción
    imprimirFraccion() {
        return `${this.numerador}/${this.denominador}`;
    }

    // Simplificar fracción
    simplificarFraccion() {
        const mcd = this.mcd(this.numerador, this.denominador);
        this.numerador /= mcd;
        this.denominador /= mcd;
        return this;
    }

    // Multiplicar fracciones
    multiplicarFracciones(newFraccion) {
        const numerador = this.numerador * newFraccion.getNumerador();
        const denominador = this.denominador * newFraccion.getDenominador();
        return new Fraccion(numerador, denominador).simplificarFraccion();
    }

    // Dividir fracciones
    dividirFracciones(newFraccion) {
        const numerador = this.numerador * newFraccion.getDenominador();
        const denominador = this.denominador * newFraccion.getNumerador();
        return new Fraccion(numerador, denominador).simplificarFraccion();
    }

    mcd = function (a, b) {
        if (b === 0) {
            return a;
        } else {
            return this.mcd(b, a % b);
        }
    }

}

// Testing

const fraccion1 = new Fraccion(2, 4);
const fraccion2 = new Fraccion(3, 5);

// Recuperamos el numerador y el denominador de la fracción 1
console.log(fraccion1.getNumerador());
console.log(fraccion1.getDenominador());

// Cambiamos el numerador y el denominador de la fracción 1
fraccion1.setNumerador(3);
fraccion1.setDenominador(9);

// Imprimimos la fracción
console.log(fraccion1.imprimirFraccion());

// Simplificamos la fracción
fraccion1.simplificarFraccion();
console.log(fraccion1.imprimirFraccion());

// Multiplicamos dos fracciones
console.log(fraccion1.multiplicarFracciones(fraccion2).imprimirFraccion()); // Para no modificar la fracción original llamamos a imprimirFraccion() y nos muestra el resultado en vez de mostrar el objeto

// Dividimos dos fracciones
console.log(fraccion1.dividirFracciones(fraccion2).imprimirFraccion()); // Para no modificar la fracción original llamamos a imprimirFraccion() y nos muestra el resultado en vez de mostrar el objeto