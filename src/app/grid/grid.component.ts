import { Component } from '@angular/core';
import { Foto } from '../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';

interface Album {
    title: string;
    description: string;
    time: string;
    image?: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  imports: [HttpClientModule],
  providers: [RecursosService],
})
export class GridComponent {

  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>;
    })
  }

  albums: Album[] = [
    {
        title: "Album 1",
        description: "Descripción del primer álbum.",
        time: "5 mins",
        image: "https://via.placeholder.com/225"
    },
    {
        title: "Album 2",
        description: "Descripción del segundo álbum.",
        time: "10 mins",
        image: "https://via.placeholder.com/225"
    },
    {
        title: "Album 3",
        description: "Descripción del tercer álbum.",
        time: "7 mins",
        image: "https://via.placeholder.com/225"
    },
    {
      title: "Album 4",
      description: "Descripción del cuarto álbum.",
      time: "5 mins",
      image: "https://via.placeholder.com/225"
    },
    {
      title: "Album 5",
      description: "Descripción del quinto álbum.",
      time: "6 mins",
      image: "https://via.placeholder.com/225"
    },
    {
      title: "Album 6",
      description: "Descripción del sexto álbum.",
      time: "5 mins",
      image: "https://via.placeholder.com/225"
  },
  {
      title: "Album 7",
      description: "Descripción del septimo álbum.",
      time: "10 mins",
      image: "https://via.placeholder.com/225"
  },
  {
      title: "Album 8",
      description: "Descripción del octavo álbum.",
      time: "7 mins",
      image: "https://via.placeholder.com/225"
  },
  {
    title: "Album 9",
    description: "Descripción del noveno álbum.",
    time: "5 mins",
    image: "https://via.placeholder.com/225"
  }
  ];


}
