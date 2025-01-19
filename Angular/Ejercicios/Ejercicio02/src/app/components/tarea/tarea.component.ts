import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {

  // Atributos de la tarea
  id: number;
  nombre: string;
  estado: boolean;

  // Constructor
  constructor(id: number, nombre: string, estado: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.estado = estado;
  }

  @Input() tarea!: TareaComponent;
  @Output() completarTarea = new EventEmitter<TareaComponent>();

}
