import { Component, OnInit } from '@angular/core';
import { NumberOperationsService } from '../number-operations.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public outputForUi : string;

  constructor(private _numOperation: NumberOperationsService) 
  { 
    this.outputForUi = '';
  }

  ngOnInit(): void 
  {
    if(this._numOperation.CheckIsNumberPrime(5)){
      this.outputForUi = '5 is a prime number';
    }
    else{
      this.outputForUi = '5 is not a prime number';
    }
  }

}
