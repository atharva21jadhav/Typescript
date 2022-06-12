import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberOperationsService {

  constructor() { }

  public CheckIsNumberPrime(num:number):boolean
  {
    for(var i:number=2;i<=num/2;++i){
      if(num%i === 0){
            return false;
      }
    }
    return true;
  }
}
