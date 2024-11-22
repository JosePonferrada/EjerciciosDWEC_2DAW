/* 
Para usar jsonPlaceholder como una API REST falsa para simular el funcionamiento de una BD,
lo primero que debemos de tener es nodejs, por tanto, habrá que seguir los pasos:
1) Visitar nodejs.org y descargar la versión que deseemmos o necesitemos
2) Instalar nodejs que hemos descargado
3) Podemos comprobar si se ha instalado bien desde el terminal de windows o del de Visual Studio Code con node -v 
4) Entrar en la página jsonPlaceholder que es la API que vamos a usar y enlazar con json-serve
5) Acceder y abajo viene como instalar json-serve para poder simular la API REST
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

const getAll = async () => {
    try {
        let respuesta = await axios.get("http://localhost:5555/primero"),
            json = await respuesta.data;

        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".modulo").textContent = el.modulo;
            $template.querySelector(".profesor").textContent = el.profesor;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.modulo = el.modulo;
            $template.querySelector(".edit").dataset.profesor = el.profesor;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //Create - POST
            try {
                let options = {
                        method: "POST",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        data: JSON.stringify({
                            modulo: e.target.modulo.value,
                            profesor: e.target.profesor.value,
                            })
                        };
                let respuesta = await axios("http://localhost:5555/primero", options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            //Update - PUT
            try {
                let options = {
                        method: "PUT",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        data: JSON.stringify({
                            modulo: e.target.modulo.value,
                            profesor: e.target.profesor.value,
                            }),
                        };
                    let respuesta = await axios(`http://localhost:5555/primero/${e.target.id.value}`,options );
                    let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
         //resetear los campos del formulario una vez editado un registro
         $form.modulo.value=null;
         $form.profesor.value=null;
         $form.id.value=null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Santo";
        $form.modulo.value = e.target.dataset.modulo;
        $form.profesor.value = e.target.dataset.profesor;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                        method: "DELETE",
                        headers: {"Content-type": "application/json; charset=utf-8"},
                        };
                    let respuesta = await axios(`http://localhost:5555/primero/${e.target.dataset.id}`,options);
                    let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});