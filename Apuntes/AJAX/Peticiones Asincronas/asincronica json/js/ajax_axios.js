// función anónima autoejecutable
(() => {
    const   $axios = document.getElementById("axios"),
            $fragment = document.createDocumentFragment();

    axios
        .get("assets/ins_complejos.json")
        //.get("https://datos.vigo.org/data/deportes/ins_complejos.json")
        .then((res) => {
            //console.log(res);
            let json = res.data;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.nombre} -- ${el.telefono} -- ${el.barrio}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch((err) => {
            //console.log(err.response);
            //añadimos un mensaje propio por si statusText de la respuesta viene vacío
            let message = err.response.statusText || "Ocurrió un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            //console.log("Esto se ejecutará independientemente del resultado Axios");
        });
})();