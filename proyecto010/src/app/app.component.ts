import { Component, OnInit } from '@angular/core';
import {ArticulosService} from './articulos.service'; //importamos el servicio llamado ArticulosService que se almacena en el archivo 'articulos.service.ts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  articulos :any;

  //Para inyectar el objeto de la clase 'ArticulosService' que crea Angular 
  //en forma automática lo hacemos en el parámetro del constructor
  constructor(private articulosServicio: ArticulosService) {
  }
//Se almacena en el atributo 'articulosServicio' la referencia del objeto de la clase 'ArticulosService' que crea Angular.
//En el método ngOnInit actualizamos la variable 'articulos' con el vector que devuelve el método 'retornar':

  ngOnInit() {
    this.articulos=this.articulosServicio.retornar();
  }
}
