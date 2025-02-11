import { Component } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-grid',
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
  })
  }
}
