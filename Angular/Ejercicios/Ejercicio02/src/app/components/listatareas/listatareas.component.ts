import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listatareas',
  imports: [TareaComponent, NgFor],
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent {

  // Lista inicial de tareas
  tareas: { tarea: string, completada: boolean }[] = [
    { tarea: 'Comprar pan', completada: false },
    { tarea: 'Estudiar Angular', completada: true },
    { tarea: 'Hacer ejercicio', completada: false }
  ];

  // Método para actualizar el estado de la tarea
  actualizarEstado(index: number): void {
    this.tareas[index].completada = !this.tareas[index].completada;
  }
}
