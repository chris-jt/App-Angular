import { Component, ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('selector2') selector2!: SelectornumericoComponent;  
  
  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);  //Accedo al metodo "fijar()" del componente hijo
  }
}
