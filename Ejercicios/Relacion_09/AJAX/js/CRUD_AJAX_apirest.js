/* 
Para usar jsonPlaceholder como una API REST falsa para simular el funcionamiento de una BD,
lo primero que debemos de tener es nodejs, por tanto, habrá que seguir los pasos:
1) Visitar nodejs.org y descargar la versión que deseemmos o necesitemos
2) Instalar nodejs que hemos descargado
3) Podemos comprobar si se ha instalado bien desde el terminal de windows o del de Visual Studio Code con node -v 
4) Entrar en la página jsonPlaceholder que es la API que vamos a usar y enlazar con json-server
5) Acceder y abajo viene como instalar json-server para poder simular la API REST
6) Comando de instalación con el gestor de paquetes npm de nodejs: npm install -g json-server
7) Descargar la versión core de insomnia para manejar la API Falsa ( https://insomnia.rest/download/)
8) Iniciar insomnia
9) Ejecutar desde un terminal de visual estudio code: json-server -w -p puerto json, donde puerto
    por defecto es el 3333, pero podemos elegir otro para evitar conflictos, ej. 5555,
    y donde json es el objeto json a usar
10) Realizar las peticiones y pruebas necesarias
*/

const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {

    let { url, method, success, error, data } = options;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            // convertimos a formato json la respuesta.
            let json = JSON.parse(xhr.responseText);
            //ejecutamos la funcion success con el parámetro de la respuesta convertida a json
            success(json);
        } else {
            // operador de tipo OR por por si la propiedad statusText viene vacía
            let message = xhr.statusText || "Ocurrió un error";
            // ejecutamos la función error para mostrar el error producido
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || "GET", url);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.send(JSON.stringify(data));
}

const getAll = () => {

    ajax({

        url: "http://localhost:5555/pilotos",

        success: (respuesta) => {

            respuesta.forEach(el => {

                $template.querySelector(".dorsal").textContent = el.dorsal;
                $template.querySelector(".nombre").textContent = el.nombre;
                $template.querySelector(".equipo").textContent = el.equipo;
                $template.querySelector(".puntos").textContent = el.puntos;


                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.dorsal = el.dorsal;
                $template.querySelector(".edit").dataset.nombre = el.nombre;
                $template.querySelector(".edit").dataset.equipo = el.equipo;
                $template.querySelector(".edit").dataset.puntos = el.puntos;

                $template.querySelector(".delete").dataset.id = el.id;

                let $clone = d.importNode($template, true);

                $fragment.appendChild($clone);

            });

            $table.querySelector("tbody").appendChild($fragment);
        },

        error: (error) => {

            $table.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`);
        }
    })
}

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", e => {

    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {

            ajax({
                url: "http://localhost:5555/pilotos",
                method: "POST",
                success: (respuesta) => location.reload(),
                error: (error) => $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
                data: {
                    dorsal: e.target.dorsal.value,
                    nombre: e.target.nombre.value,
                    equipo: e.target.equipo.value,
                    puntos: e.target.puntos.value
                }
            });

        } else {

            ajax({
                url: `http://localhost:5555/pilotos/${e.target.id.value}`,
                method: "PUT",
                success: (respuesta) => location.reload(),
                error: (error) => $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
                data: {
                    dorsal: e.target.dorsal.value,
                    nombre: e.target.nombre.value,
                    equipo: e.target.equipo.value,
                    puntos: e.target.puntos.value
                }
            });
        }

        $form.dorsal.value = null;
        $form.nombre.value = null;
        $form.equipo.value = null;
        $form.puntos.value = null;
        $form.id.value = null;

    }
});

d.addEventListener("click", e => {

    if (e.target.matches(".edit")) {

        $titulo.textContent = "Editar piloto";
        $form.dorsal.value = e.target.dataset.dorsal;
        $form.nombre.value = e.target.dataset.nombre;
        $form.equipo.value = e.target.dataset.equipo;
        $form.puntos.value = e.target.dataset.puntos;
        $form.id.value = e.target.dataset.id;

    }

    if (e.target.matches(".delete")) {

        let isDelete = confirm(`¿Estás seguro de eliminar el piloto con dorsal ${e.target.dataset.id}?`);

        if (isDelete) {

            ajax({
                url: `http://localhost:5555/pilotos/${e.target.dataset.id}`,
                method: "DELETE",
                success: (respuesta) => location.reload(),
                error: (error) => $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
            });

        }
    }
});