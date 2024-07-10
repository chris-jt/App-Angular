import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit{
  //interpolacion
  @Input() valor: string="";
//property binding
  @Input() numero: number=1;

  constructor(){}

  ngOnInit(){
   
  }
}
