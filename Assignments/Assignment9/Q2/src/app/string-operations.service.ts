import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringOperationsService {

  constructor() 
  { }

  public CountCaptial(str:string):number
  {
    let num:number =0; 
    [...str].forEach(c =>{
      if(c === c.toUpperCase() && c !== ' '){
        num++;
      }
    });

    return num;
  }
}
