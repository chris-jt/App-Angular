import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrl: './selectornumerico.component.css'
})
export class SelectornumericoComponent implements OnInit {
  @Input() minimo: number=1;
  @Input() maximo: number=1;
  actual: number=1;
  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }
  incrementar() {
    if (this.actual<this.maximo)
      this.actual++;
  }
  decrementar() {
    if (this.actual>this.minimo)
      this.actual--;
  }  
  //Este metodo es el que se va a llamar desde el HTML de AppComponent
  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }
}
