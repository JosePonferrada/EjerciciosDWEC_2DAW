const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let respuesta = await axios.get("http://localhost:5555/pilotos"),
            json = await respuesta.data;

        console.log(json);

        json.forEach((el) => {
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
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        dorsal: e.target.dorsal.value,
                        nombre: e.target.nombre.value,
                        equipo: e.target.equipo.value,
                        puntos: e.target.puntos.value,
                    })
                };
                let respuesta = await axios("http://localhost:5555/pilotos", options);
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
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        dorsal: e.target.dorsal.value,
                        nombre: e.target.nombre.value,
                        equipo: e.target.equipo.value,
                        puntos: e.target.puntos.value,
                    }),
                };
                let respuesta = await axios(`http://localhost:5555/pilotos/${e.target.id.value}`, options);
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
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar piloto";
        $form.dorsal.value = e.target.dataset.dorsal;
        $form.nombre.value = e.target.dataset.nombre;
        $form.equipo.value = e.target.dataset.equipo;
        $form.puntos.value = e.target.dataset.puntos;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar el registro ${e.target.dataset.id}?`);

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                };
                let respuesta = await axios(`http://localhost:5555/pilotos/${e.target.dataset.id}`, options);
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
    }
});