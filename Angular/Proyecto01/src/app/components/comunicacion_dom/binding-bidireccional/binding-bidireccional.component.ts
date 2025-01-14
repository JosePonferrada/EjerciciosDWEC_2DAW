import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-bidireccional',
  imports: [FormsModule],
  templateUrl: './binding-bidireccional.component.html',
  styleUrl: './binding-bidireccional.component.css'
})
export class BindingBidireccionalComponent {
  modulo = "HLC";
  profesor = "Pepito";
  horasTrabajadas = 40;

  // 
  //propiedad para event binding bidireccional (bana in box) 
  especialidad = "especialidad inicial";
  /* 
  actualizarEspecialidad(evento:Event){ 
    this.especialidad=(<HTMLInputElement>evento.target).value; 
  } 
  */
}
