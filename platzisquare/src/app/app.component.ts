import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    lugares:any = [
        { active: true, name: 'Huellas felices' },
        { active: true, name: 'Donas delis' },
        { active: false, name: 'Mapache feliz' }

    ];

    lat: number = 19.702075;
    lng: number = -101.192885;

    constructor() {

    }
}
