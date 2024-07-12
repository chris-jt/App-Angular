import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //articulos: any;                      //Definimos un atributo llamado articulos de tipo 'any':
  personajes: any;
  constructor(private http: HttpClient){} //definir una propiedad en los parámetros del constructor que se inyecta cuando se crea la componente
                                          // la propiedad http que es de la clase HttpClient nos servirá para hacer la petición al servidor.
  ngOnInit() {
    //this.http.get("https://scratchya.com.ar/vue/datos.php").subscribe(
      this.http.get("https://rickandmortyapi.com/api/character")
      .subscribe(  
        resultado =>{
        this.personajes = resultado;
      }
    )
  }
}