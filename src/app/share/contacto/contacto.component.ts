import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo = 'Contacto';

  medios: any[] = [
    {"texto":"En Twitter"},
    {"texto":"En Facebook"},
    {"texto":"Por Email"},
  ]
  
}
