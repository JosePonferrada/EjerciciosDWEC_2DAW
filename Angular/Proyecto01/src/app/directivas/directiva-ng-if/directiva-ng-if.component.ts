import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-ng-if',
  imports: [NgIf, NgStyle, FormsModule],
  templateUrl: './directiva-ng-if.component.html',
  styleUrl: './directiva-ng-if.component.css'
})
export class DirectivaNgIfComponent {
  nota = 0;
  obtenerNota = false;
  nombreAlumno: string = "";
  nombreModulo = "";
  consultaNota() {
    this.nota = 7;
    this.obtenerNota = true;
  }
}
