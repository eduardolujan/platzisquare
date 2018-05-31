import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    persons: any = [
        {age: 12, name: 'Eduardo Lujan'},
        {age: 21, name: 'Fernando Zaldivar'},
        {age: 12, name: 'Franco Lopez'},
        {age: 19, name: 'Guadalupe Gonzales'},
        {age: 81, name: 'Jorge Rivas'},
        {age: 54, name: 'Juan Perez'},
    ];

    constructor() {

    }
}
