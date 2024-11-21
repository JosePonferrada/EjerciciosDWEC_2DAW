// Creamos una función anónima autoejecutable para que se ejecute al cargar la página
/* (() => { 
    console.log("Hola mundo");
})(); */

// Función anónima autoejecutable
(() => { 
    // Definimos las variables separadas por comas
    const d = document, 
    $xhr = d.getElementById("xhr"), 
    $fragment = d.createDocumentFragment();

    // 1º paso: Instanciar objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    // La propiedad readyState es una propiedad importante que nos indica el estado de la petición
    // La propiedad responseText nos devuelve la respuesta de la petición como texto que tendremos que pasar a JSON
    // La propiedad status nos devuelve el estado de la respuesta HTTP
    // La propiedad statusText nos devuelve el mensaje de estado de la respuesta HTTP
    // ReadyState: 4 = Petición completada
    // Cuando ya hemos recibido un 4, comprobamos si el estado de la respuesta HTTP está entre 200 y 300 que indica que ha tenido éxito

    // 2º paso: Asignar eventos
    // Vamos a asociar el evento readystatechange al objeto xhr directamente

    xhr.addEventListener("readystatechange", (e) => {
        // Comprobamos si el estado de la petición es 4, es decir, petición completada

        if (xhr.readyState !== 4) return; // Si no es 4, salimos de la función y no hacemos nada

        // Comprobamos que la respuesta es correcta

        if (xhr.status >= 200 && xhr.status < 300) {
            // Tenemos los datos en formato texto, los pasamos a JSON
            // Hay 2 funciones para convertir texto a JSON: JSON.parse() y JSON.stringify()
            // JSON.parse() convierte un texto en formato JSON a un objeto JavaScript
            // JSON.stringify() convierte un objeto JavaScript a un texto en formato JSON
            // El método parse() lo usaremos al recibir datos de un servidor
            // El método stringify() lo usaremos al enviar datos a un servidor

            let json = JSON.parse(xhr.responseText);

            // Recorremos los elementos del objeto JSON y crearemos un elemento li por cada uno de ellos

            json.forEach((fila) => {
                const $li = d.createElement("li");
                $li.innerHTML = `${fila.barrio} -- ${fila.calle} -- ${fila.telefono}`;

                // Añadimos el li al fragmento
                $fragment.appendChild($li);

            })

            // Añadimos el fragmento al elemento $xhr
            $xhr.appendChild($fragment);

        } else {
            // Si la respuesta no es correcta, mostramos un mensaje de error
            // Si no hay mensaje de estado, mostramos "Ocurrió un error"
            let message = xhr.statusText || "Ocurrió un error en la petición"; // Operador Cortocircuito
            $xhr.innerHTML = `Código: ${xhr.status} ==> Mensaje de error: ${message}`;

        }

    })

    // 3º paso: Abrir la petición
    xhr.open("GET", "https://datos.vigo.org/data/deportes/ins-complejos.json");

    // 4º paso: Enviar la petición
    xhr.send();

})();