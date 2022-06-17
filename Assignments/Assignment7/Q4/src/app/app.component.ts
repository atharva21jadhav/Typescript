import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q4';
  public str:string = "Marvellous InfoSystems";

  public ToUpper()
  {
    this.str = this.str.toUpperCase()
  }
  public ToLower()
  {
    this.str = this.str.toLowerCase()
  }

}
