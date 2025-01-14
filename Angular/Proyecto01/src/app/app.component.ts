import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './components/componente01/componente01.component';
import { Componente02Component } from './components/componente02/componente02.component';
import { InterpolacionComponent } from './components/comunicacion_dom/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './components/comunicacion_dom/property-binding/property-binding.component';
import { EventBindingComponent } from './components/comunicacion_dom/event-binding/event-binding.component';
import { BindingBidireccionalComponent } from './components/comunicacion_dom/binding-bidireccional/binding-bidireccional.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01Component, Componente02Component, InterpolacionComponent, PropertyBindingComponent, EventBindingComponent, BindingBidireccionalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //styles: `h1 { background-color: blue; }`
})
export class AppComponent {
  title = 'Proyecto01';
}
