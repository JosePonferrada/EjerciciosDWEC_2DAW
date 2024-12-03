const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {

        let respuesta = await fetch("http://localhost:5555/pilotos");
        let json = await respuesta.json();

        console.log(respuesta);
        if (!respuesta.ok) throw { 
            status: respuesta.status, 
            statusText: respuesta.statusText 
        };

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
        $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {

    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {

            try {

                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify({
                        dorsal: e.target.dorsal.value,
                        nombre: e.target.nombre.value,
                        equipo: e.target.equipo.value,
                        puntos: e.target.puntos.value,
                    }),
                },

                respuesta = await fetch("http://localhost:5555/pilotos", options),
                json = await respuesta.json();

                if (!respuesta.ok) throw { 
                    status: respuesta.status, 
                    statusText: respuesta.statusText 
                };

                location.reload();

            } catch (err) {

                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }

        } else {
            // Update - PUT
            try {

                let options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify({
                        dorsal: e.target.dorsal.value,
                        nombre: e.target.nombre.value,
                        equipo: e.target.equipo.value,
                        puntos: e.target.puntos.value,
                    }),
                },

                respuesta = await fetch(`http://localhost:5555/pilotos/${e.target.id.value}`, options),
                json = await respuesta.json();

                if (!respuesta.ok) throw { 
                    status: respuesta.status, 
                    statusText: respuesta.statusText 
                };

                location.reload();

            } catch (err) {

                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }


        }

        // Reset form
        $form.dorsal.value = null;
        $form.nombre.value = null;
        $form.equipo.value = null;
        $form.puntos.value = null;
        $form.id.value = null;

    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Piloto";
        $form.dorsal.value = e.target.dataset.dorsal;
        $form.nombre.value = e.target.dataset.nombre;
        $form.equipo.value = e.target.dataset.equipo;
        $form.puntos.value = e.target.dataset.puntos;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

        if (isDelete) {
            try {

                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                },

                respuesta = await fetch(`http://localhost:5555/pilotos/${e.target.dataset.id}`, options),
                json = await respuesta.json();

                if (!respuesta.ok) throw { 
                    status: respuesta.status, 
                    statusText: respuesta.statusText 
                };

                location.reload();

            } catch (err) {

                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
});