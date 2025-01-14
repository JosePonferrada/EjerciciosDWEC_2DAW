import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  modulo = 'HLC';
  profesor = 'Pepito';
  horasTrabajadas = 40;

  private kms = 200;

  // Propiedad privada para usar Getters y Setters
  getKms() {
    return this.kms; 
  }
}
