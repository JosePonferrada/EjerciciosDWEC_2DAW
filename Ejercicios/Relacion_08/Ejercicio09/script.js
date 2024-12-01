// Función para convertir kms a metros y viceversa
function convertirDistancia() {
    const kmsInput = document.getElementById("kms");
    const metrosInput = document.getElementById("metros");
    let kms = parseFloat(kmsInput.value); // Obtenemos el valor de kms
    let metros = parseFloat(metrosInput.value); // Obtenemos el valor de metros

    if (kmsInput.value !== "") {
        if (isNaN(kms)) {
            alert("El valor introducido en kms no es un número.");
            return;
        } 

        metrosInput.value = kms * 1000; // Convertimos kms a metros (Usamos metrosInput.value ya que la variable metros tiene el valor del input parseado)
        kmsInput.value = ""; // Limpiamos el campo kms
    } else if (metrosInput.value !== "") {
        if (isNaN(metros)) {
            alert("El valor introducido en metros no es un número.");
            return;
        }

        kmsInput.value = metros / 1000; // Convertimos metros a kms
        metrosInput.value = ""; // Limpiamos el campo metros
    } else {
        alert("Introduce un valor en kms o metros.");
        return;
    }
}

// Función para convertir de kgs a gramos y viceversa
function convertirPeso() {
    const kgsInput = document.getElementById("kgs");
    const gramosInput = document.getElementById("gramos");
    let kgs = parseFloat(kgsInput.value); // Obtenemos el valor de kgs
    let gramos = parseFloat(gramosInput.value); // Obtenemos el valor de gramos

    if (kgsInput.value !== "") {
        if (isNaN(kgs)) {
            alert("El valor introducido en kgs no es un número.");
            return;
        }

        gramosInput.value = kgs * 1000; // Convertimos kgs a gramos (Usamos gramosInput.value ya que la variable gramos tiene el valor del input parseado)
        kgsInput.value = ""; // Limpiamos el campo kgs
    } else if (gramosInput.value !== "") {
        if (isNaN(gramos)) {
            alert("El valor introducido en gramos no es un número.");
            return;
        }

        kgsInput.value = gramos / 1000; // Convertimos gramos a kgs
        gramosInput.value = ""; // Limpiamos el campo gramos
    } else {
        alert("Introduce un valor en kgs o gramos.");
        return;
    }
}

// Asignamos los eventos a los botones
document.getElementById("btnDistancia").addEventListener("click", convertirDistancia);
document.getElementById("btnPeso").addEventListener("click", convertirPeso);