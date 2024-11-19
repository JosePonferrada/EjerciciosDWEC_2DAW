/* El objeto API Fetch se basa en promesas (Promise). Un promesa podemos verla
como un condicional en el que si se cumple se ejecuta el código de un método then y  
si no se cumple se ejecuta el código del método catch. Además, existe un método 
finally que se ejecuta independientemente de que se cumpla o no la condición.
Además, podemos encadenar varios then, en los que cada uno de ellos trabaja de
forma automática con la salida del anterior then.*/

//función autoejecutable
(() => {
    /* creación de variables:
    En este caso no hay que crear instancia de objeto Fetch  
    $fetch para identificar al elemento del DOM
    $fragment para crear un fragmento de documento y no tener que estar realizando inserciones continuas en el DOM
    */
    const   $fetch = document.getElementById("fetch"),
            $fragment = document.createDocumentFragment();

    /* fetch con el recurso al que vamos a hacer referencia (url o archivo json).
    Además, podemos utilizar un parámetro de opciones, que ahora no utilizaremos, 
    pero sí cuando vayamos a realizar CRUD
    Importante: el método fetch trabaja con promesas  */

    //fetch("assets/ins_complejos.json")
        fetch("https://datos.vigo.org/data/deportes/ins-complejos.json")
        /*método then de la promesa, donde enviamos la respuesta (en este caso positiva)
        Ahora bien, el método fecth devuelve un readableStream que habrá que convertir
        a un formato válido como json, para lo que necesitamos otro then para manipularla
        Para ello, usaremos el método de fetch,  json() que convierte a objeto json, lo que
        antes era en el objeto XmlHttpRequest era JSON.parse
        Además, hay que validar si la respuesta es correcta, con el parámetro ok, y en 
        caso contrario, ejecutar el método reject de Promise para rechazar la promesa, 
        es decir, rechazamos toda la respuesta de la promesa*/
        .then((respuesta) => {
            console.log(respuesta);
            return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
            })
        //otro método then que manipula la respuesta en formato json obtenida en el then anterior
        .then((json) => {
            console.log(json);
            //$fetch.innerHTML = json;

            //recorremos los elementos de la respuesta para mostrarlos
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.nombre} -- ${el.telefono} -- ${el.barrio}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
            })
        // método catch de la promesa, donde enviamos un error (en este caso respuesta negativa)
        .catch((err) => {
            //console.log(err);
            /*si el estado no está entre 200 y 300 vamos a imprimir el error correspondiente,
            teniendo en cuenta que si es un error desconocido, imprimamos "Ocurrió un error"*/
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        //método finally de la promesa que se ejecuta haya respueta positiva o negativa
        .finally(() => {
            console.log("Se ejecutará siempre, haya o no error");
        });
})();