import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './share/contacto/contacto.component';
import { GridComponent } from './grid/grid.component';
import { RecursosService } from '../servicios/recursos.service';
import { HttpClientModule, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, GridComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ProyectoAngular';
  
}
