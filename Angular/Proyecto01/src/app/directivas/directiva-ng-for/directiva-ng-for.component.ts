import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PadreahijoComponent } from '../../components/comunicacion_componentes/padreahijo/padreahijo.component';

@Component({
  selector: 'app-directiva-ng-for',
  imports: [NgFor, PadreahijoComponent],
  templateUrl: './directiva-ng-for.component.html',
  styleUrl: './directiva-ng-for.component.css'
})
export class DirectivaNgForComponent {
  arrayModulos=[{modulo:"HLC"},{modulo:"DAW"},{modulo:"DIW"},{modulo:"DWEC"},{modulo:"DWE8"}];
}
