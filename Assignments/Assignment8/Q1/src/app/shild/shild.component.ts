import { Component, EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shild',
  templateUrl: './shild.component.html',
  styleUrls: ['./shild.component.css']
})
export class ShildComponent implements OnInit {

  @Output() public myEvent = new EventEmitter();

  public strMessage:any;

  constructor() { }

  ngOnInit(): void {
  }

  public SendToParent()
  {
    this.myEvent.emit(this.strMessage);
  }

}
