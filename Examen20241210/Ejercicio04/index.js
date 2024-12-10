class Planta {

    constructor(nombre, tipo, riego) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.riego = riego;
    }

    informacion() {
        console.log(this);
    }

}

// TEST PLANTA

const planta1 = new Planta("Girasol", "Flor", "Poco");

planta1.informacion();

// Clase Arbusto

class Arbusto extends Planta {

    constructor(nombre, tipo, riego, altura) {
        super(nombre, tipo, riego);
        this.altura = altura;
    }

    informacion() {
        console.log(this);
    }

}

// Test ARBUSTO

const arbusto = new Arbusto("Arbustillo", "Salvaje", "Poco", "40cm");

arbusto.informacion();


// CLASE ARBOL

class Arbol extends Planta {
    
    constructor(nombre, tipo, riego, edad) {
        super(nombre, tipo, riego);
        this.edad = edad;
    }

    informacion() {
        console.log(this);
    }

}

// TEST ARBOL

const arbol = new Arbol("Arbolillo", "De Navidad", "Ninguno", "12 años");

arbol.informacion();

