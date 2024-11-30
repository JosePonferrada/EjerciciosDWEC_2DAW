var d = document;

d.addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = d.getElementById("texto").value;
    const desplazamiento = Math.floor(Math.random() * 10) + 1;
    let textoCifrado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i); // Obtenemos el valor ASCII del caracter
        
        if (char >= 65 && char <= 90) {
            textoCifrado += String.fromCharCode(((char - 65 + desplazamiento) % 26) + 65); // Convertimos el valor ASCII a caracter y lo añadimos al texto cifrado
        } else if (char >= 97 && char <= 122) {
            textoCifrado += String.fromCharCode(((char - 97 + desplazamiento) % 26) + 97); // Convertimos el valor ASCII a caracter y lo añadimos al texto cifrado
        } else {                                                                           // En estos casos anteriores, nos estamos asegurando que el caracter se encuentre en el rango de letras
            textoCifrado += texto[i];
        }
    }
    // Mostramos el resultado en el span
    d.getElementById("resultado").innerHTML = `El texto: ${texto} cifrado con un desplazamiento de ${desplazamiento} es: ${textoCifrado}`;

});
