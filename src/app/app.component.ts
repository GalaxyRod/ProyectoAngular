import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './share/contacto/contacto.component';
import { GridComponent } from './body/grid/grid.component';
import { CarruselComponent } from './body/carrusel/carrusel.component';
import { MenuComponent } from './body/menu/menu.component';
import { CommonModule } from '@angular/common';
import { DataComponent } from './footer/data/data.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent,  CarruselComponent, MenuComponent, CommonModule, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ProyectoAngular';
  
}
