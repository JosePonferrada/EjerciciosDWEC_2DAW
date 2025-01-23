import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  imports: [NgForOf],
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  @Input() tareas: { tarea: string; completada: boolean }[] = []; // Recibe las tareas desde el padre
  @Output() estadoActualizado = new EventEmitter<number>(); // Emite el índice de la tarea al padre

  // Método para emitir el índice de la tarea completada al padre
  marcarCompletada(index: number): void {
    this.estadoActualizado.emit(index);
  }
}
