import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrl: './listadoarticulos.component.css'
})
export class ListadoarticulosComponent  implements OnInit{
  @Input() datos:any;
  
  constructor() { }

  ngOnInit() {
  }
}
