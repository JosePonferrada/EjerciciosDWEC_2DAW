import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nombre: string = '';
  edad: number = 0;
  email: string = '';
  mensaje: string = '';

  enviar() {
    alert(`Hola ${this.nombre}, tienes ${this.edad} años y tu email es ${this.email}`);
  }

  bienvenida() {
    this.mensaje = 'Bienvenido ' + this.nombre;
  }

}
