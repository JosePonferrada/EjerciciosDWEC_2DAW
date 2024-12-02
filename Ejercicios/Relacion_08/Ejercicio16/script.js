class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Modificar coordenadas
    modificarCoordenadas(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    // Método para ver si dos puntos son iguales
    sonIguales(newPunto) {
        return this.x === newPunto.x && this.y === newPunto.y;
    }

    // Método para sumar dos puntos
    sumarPuntos(newPunto) {
        return new Punto(this.x + newPunto.x, this.y + newPunto.y);
    }

    // Método para calcular la distancia entre dos puntos
    distanciaEntrePuntos(newPunto) {
        return Math.sqrt(Math.pow(this.x - newPunto.x, 2) + Math.pow(this.y - newPunto.y, 2));
    }

}

// Testing
const punto1 = new Punto(2, 4);
const punto2 = new Punto(3, 5);

// Cambiamos las coordenadas del punto 1
punto1.modificarCoordenadas(3, 5);
console.log(punto1);

// Comprobamos si dos puntos son iguales
console.log(punto1.sonIguales(punto2));

// Sumamos dos puntos
console.log(punto1.sumarPuntos(punto2));

// Calculamos la distancia entre dos puntos
console.log(punto1.distanciaEntrePuntos(punto2));