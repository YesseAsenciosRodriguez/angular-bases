import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
  numero : number = 10;
  base : number = 5;

   acumulador(valor: number) {
    this.numero += valor;
  }
  
  acumulador2(valor: number) {
    this.base += valor;
  }
}
