import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-listatareas',
  imports: [TareaComponent],
  templateUrl: './listatareas.component.html',
  styleUrl: './listatareas.component.css'
})
export class ListatareasComponent {

  // Lista de tareas
  tareas: TareaComponent[] = [{id: 1, nombre: 'Tarea 1', estado: false}, {id: 2, nombre: 'Tarea 2', estado: true}, {id: 3, nombre: 'Tarea 3', estado: false}];

  // Método que actualiza el estado de una tarea
  completarTarea(tarea: TareaComponent) {
    tarea.estado = !tarea.estado;
  }

}
