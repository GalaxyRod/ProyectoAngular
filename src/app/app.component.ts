import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './share/contacto/contacto.component';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ProyectoAngular';
}
