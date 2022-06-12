import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public additionResult:number;
  public subtractionResult:number;
  
  // Pass service as DI
  constructor(private _arithmeticService: ArithmeticService)
  {
    this.additionResult = 0;
    this.subtractionResult = 0;
  }

  // call the service methods  
  ngOnInit(): void 
  {
    this.additionResult = this._arithmeticService.AddTwoNumbers(5,10);
    this.subtractionResult = this._arithmeticService.SubtractTwoNumbers(5,10);
  }

}
