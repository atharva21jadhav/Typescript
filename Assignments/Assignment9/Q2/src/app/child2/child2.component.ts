import { Component, OnInit } from '@angular/core';
import { StringOperationsService } from '../string-operations.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  totalUpperCase:number;
  constructor(private _stringOperation: StringOperationsService) 
  { 
    this.totalUpperCase = 0;
  }

  ngOnInit(): void 
  {
    this.totalUpperCase = this._stringOperation.CountCaptial('AtHaRvA');
  }

}
