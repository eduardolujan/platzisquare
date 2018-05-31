import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a = 2;
  b = 3;
  listo = false;
  contador = 0;
  nombre = '';
  apellido = '';
  constructor() {
      setTimeout(() => { this.listo = true; }, 3000);
  }

  onClickButton(element) {
      console.log(element);
      ++this.contador;
  }
}
