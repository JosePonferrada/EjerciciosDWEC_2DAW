import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  modulo = "HLC";
  profesor = "Pepito";
  horasTrabajadas = 40;

  //función para explicar event binding (pasando el evento al componente) 
  cursoAlumno = "Elige un curso, por favor";
  setCursoUsuario(evento: Event) {
    console.log(evento);
    if ((<HTMLInputElement>evento.target).value == "1") {
      this.cursoAlumno = "alumno de 1º de DAW";
    }
    else {
      this.cursoAlumno = "alumno de 2º de DAW";
    }
  }
}
