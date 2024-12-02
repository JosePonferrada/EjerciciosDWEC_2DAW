var d = document;

d.addEventListener("keydown", function(e) {
    if (e.altKey && e.code === "F12") {
        d.body.style.backgroundImage = "url(./img/alonso.jpg)";
        d.body.style.backgroundSize = "cover";
        d.body.textContent = ""; // Eliminamos el texto para ver la foto
    }
});