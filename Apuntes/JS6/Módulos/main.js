import sumar from "./modulo.js"; // Puedes llamar a la función por el nombre que quieras porque no tiene nombre

// Cuando yo quiero importar una función que tiene un nombre, deberemos llamarla de esta manera: import {sumar}
// Cuando tengo varios exports y un export default, la default se importará fuera de las llaves

// También se puede exportar un objeto con todas las funciones que quiera y al ser un export default lo llamamos como queramos

sumar (5, 7);