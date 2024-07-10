import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  valor: number=1;
  constructor(){}

  ngOnInit(){
    this.valor = Math.trunc((Math.random() * 6 )) + 1;
  }
}
