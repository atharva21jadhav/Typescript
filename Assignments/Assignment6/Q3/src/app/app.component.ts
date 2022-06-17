import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 style="color: blue;">Marvellous InfoSystems</h1>
  <label for="inputField">Input:</label>
  <input type="text" name="inputField">
  ` 
})
export class AppComponent {
  title = 'Q3';
}
