import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public data:any;
  @Output() public myEvent = new EventEmitter();

  public SendDataToParent()
  {
    this.myEvent.emit('Hello from child');
  }
}
