import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from MMA Training!';

  showMsg = true;
  colorName = 'green';

  users = [
    { userId: 1, name: 'Mohammed'},
    { userId: 2, name: 'Khadija'},
    { userId: 3, name: 'Ali'},
    { userId: 4, name: 'Hamza'},
    { userId: 5, name: 'Ayesha'}
  ]

  readMe() {
    console.log("I am in read me ...");
  }
}
