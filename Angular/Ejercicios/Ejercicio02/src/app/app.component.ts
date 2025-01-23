import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListatareasComponent } from './components/listatareas/listatareas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListatareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio02';
}
