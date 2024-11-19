/* Las funciones asíncronas surgen para ejecutar una acción cuando ya se ha
    consumado una respuesta*/


//Función autoejecutable
(() => {
    /* creación de variables:
    En este caso no hay que crear instancia de objeto Fetch  
    $fetchAsync para identificar al elemento del DOM
    $fragment para crear un fragmento de documento y no tener que estar realizando inserciones continuas en el DOM
    */
    const   $fetchAsync = document.getElementById("apiFetch"),
            $fragment = document.createDocumentFragment();

    // crear función asíncrona para poder utilizar await
    async function obtenerDatos() {
        try {
            /*crear variable respuesta que va a ser la petición a la api de fetch,
            pero le decimos que espere a obtener la respuesta para ejecutar la 
            siguiente línea de código,es decir, antes de cargar la variable json 
            en la que almacenamos la respuesta en formato json con el método json.
            Igualmente le añadimos un await para que espere hasta que esté la 
            variable convertida a formato json*/
            //let respuesta = await fetch("assets/ins_complejos.json"),
          let respuesta= await fetch("https://datos.vigo.org/data/deportes/ins-complejos.json"),
            json = await respuesta.json();

            console.log(respuesta, json);

            /* si hay error mandamos el flujo de programación al catch con el
                estado (código de error) y el texto del error*/
            if (!respuesta.ok) throw {
                status: respuesta.status,
                statusText: respuesta.statusText
            };
            //mostramos los resultados de la respuesta
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.nombre} -- ${el.telefono} -- ${el.barrio}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
        } catch (err) {
            console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    obtenerDatos();
})();