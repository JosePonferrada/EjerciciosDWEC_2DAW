var d = document;

const h1Velocidad = d.getElementById('velocidadAct');
let velocidad = 0;

d.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        if (velocidad < 100) {
            h1Velocidad.textContent = 'Velocidad ' + (parseInt(h1Velocidad.textContent.split(' ')[1]) + 1); // Con el parseInt obtenemos el número de la velocidad y 
                                                                                                            // le vamos sumando 1 (Velocidad sería el índice 0 y el número el índice 1)
            velocidad++;    
        }
        
    } else if (e.key === 'ArrowDown') {
        if (velocidad > 0) {
            h1Velocidad.textContent = 'Velocidad ' + (parseInt(h1Velocidad.textContent.split(' ')[1]) - 1); // Disminuimos la velocidad en el h1
            velocidad--;
        }
    }
});