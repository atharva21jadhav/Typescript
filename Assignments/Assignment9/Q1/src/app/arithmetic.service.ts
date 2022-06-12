import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() 
  { }

  // Add service to add two numbers
  public AddTwoNumbers(num1: number, num2: number):number
  {
    return num1+num2;
  }

  // Subtract service to subtract two numbers
  public SubtractTwoNumbers(num1: number, num2: number):number
  {
    return num1-num2;
  }
}
