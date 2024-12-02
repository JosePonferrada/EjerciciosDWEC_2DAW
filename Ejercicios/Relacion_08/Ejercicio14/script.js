var d = document;

d.getElementById('analizar').addEventListener("click", function() {

    const texto = d.getElementById('cuadro').value;

    if (texto === '') {
        alert('No has introducido ningún texto');
        return;
    }

    const palabras = texto.split(' '); // Guardamos las palabras en un array
    const numPalabras = palabras.length; // Guardamos el número de palabras
    const primeraPalabra = palabras[0]; 
    const ultimaPalabra = palabras[numPalabras - 1];
    const palabrasAlReves = palabras.reverse().join(' '); // Invertimos el array y lo convertimos en un string
    const palabrasOrdenadas = palabras.sort().join(' '); // Ordenamos el array y lo convertimos en un string
    const palabrasOrdenadasAlReves = palabras.reverse().join(' '); // Invertimos el array y lo convertimos en un string

    // Para abrir una nueva ventana con los resultados
    const ventana = window.open('', 'Resultados', 'width=500,height=500');

    // Titulo de la ventana
    ventana.document.write('<title>Resultados</title>');

    ventana.document.write('<h1>Resultados</h1>');
    ventana.document.write('<p><strong>Palabras:</strong> ' + numPalabras + '</p>');
    ventana.document.write('<p><strong>Primera palabra:</strong> ' + primeraPalabra + '</p>');
    ventana.document.write('<p><strong>Última palabra:</strong> ' + ultimaPalabra + '</p>');
    ventana.document.write('<p><strong>Palabras al revés:</strong> ' + palabrasAlReves + '</p>');
    ventana.document.write('<p><strong>Palabras ordenadas:</strong> ' + palabrasOrdenadas + '</p>');
    ventana.document.write('<p><strong>Palabras ordenadas al revés:</strong> ' + palabrasOrdenadasAlReves + '</p>');

    ventana.document.close(); 

});