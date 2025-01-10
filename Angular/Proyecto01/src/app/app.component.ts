import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './components/componente01/componente01.component';
import { Componente02Component } from './components/componente02/componente02.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01Component, Componente02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto01';
}
