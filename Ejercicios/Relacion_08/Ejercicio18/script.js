var d = document;

d.getElementById("formDAW").addEventListener("submit", function (e) {
    // Si se ha hecho click en el botón de enviar desactivamos el botón del otro formulario
    const btnSMR = d.getElementById("submitSMR");
    btnSMR.classList.add("disabled");
    alert("Se ha matriculado en DAW");

});

d.getElementById("formSMR").addEventListener("submit", function (e) {
    // Si se ha hecho click en el botón de enviar desactivamos el botón del otro formulario
    const btnDAW = d.getElementById("submitDAW");
    btnDAW.classList.add("disabled");
    alert("Se ha matriculado en SMR");
});
