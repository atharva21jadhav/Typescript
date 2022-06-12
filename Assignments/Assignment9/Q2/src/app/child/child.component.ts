import { Component, OnInit } from '@angular/core';
import { NumberOperationsService } from '../number-operations.service';
import { StringOperationsService } from '../string-operations.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public outputForUi:string;
  public totalUpperCase:number;
  constructor(private _numberService:NumberOperationsService, private _stringService: StringOperationsService) 
  { 
    this.outputForUi = '';
    this.totalUpperCase = 0;
  }

  ngOnInit(): void 
  {
      this.outputForUi = this._numberService.CheckIsNumberPrime(11) ? '11 is prime number' : '11 is not prime';
      this.totalUpperCase = this._stringService.CountCaptial('Marvellous InfoSystems');
  }

}
