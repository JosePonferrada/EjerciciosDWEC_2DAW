import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padreahijo',
  imports: [],
  templateUrl: './padreahijo.component.html',
  styleUrl: './padreahijo.component.css'
})
export class PadreahijoComponent {
  @Input() modParaHijo!: {modulo: string};
  @Input() indiceParaHijo!: number;
}
