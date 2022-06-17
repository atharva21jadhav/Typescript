import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q3';

  public stringToDisplay:string;
  constructor()
  {
    this.stringToDisplay = "Marvellous InfoSystems";
  }

  public fun(){
    this.stringToDisplay = "Educating Better tomorrow"
  }

}
