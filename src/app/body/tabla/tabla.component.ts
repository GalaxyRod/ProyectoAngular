import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  posts: any[] = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.posts = json.slice(0, 10);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }

  mostrarContenido(contenido: string) {
    alert(contenido); // Puedes cambiar esto por un modal si lo prefieres
  }
}
