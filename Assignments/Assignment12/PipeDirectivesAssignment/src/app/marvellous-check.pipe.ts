import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousCheck'
})
export class MarvellousCheckPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    var modelStr = `${value} is  `;

    if(args[0].toLowerCase() === 'even')
    {
        if(value%2 === 0)
        {
          modelStr += 'even number.';
        }
        else{
          modelStr += ' not even number.';
        }
    }
    else if(args[0].toLowerCase() === 'odd')
    {
      if(value%2 !== 0)
      {
        modelStr += 'odd number.';
      }
      else{
        modelStr += 'not odd number.';
      }
    }
    else if(args[0].toLowerCase() === 'prime')
    {
        if(this.isPrime(value))
        {
          modelStr += "prime number."
        }
        else
        {
          modelStr += "not a prime number."
        }
    }
    else if(args[0].toLowerCase() === 'perfect')
    {
        if(this.isPerfect(value)){
          modelStr += "perfect number."
        }
        else{
          modelStr += "is not a perfect number."
        }
    }
    return modelStr;
  }

  private isPrime(number:number) : boolean
  {
    if (number <= 1)
      return false;

    if (number <= 3)
      return true;

    if (number%2 == 0 || number%3 == 0)
      return false;

    for (var i=5; i*i<=number; i=i+6)
    {
        if (number%i == 0 || number%(i+2) == 0)
        return false;
    }

    return true;
  }

  private isPerfect(number:number) :boolean
  {
    var sum: number = 0;
    for (let index = 1; index < number; index++) {
       if(number % index === 0)
       {
        sum += index;
       }
    }

    if(sum === number){
      return true;
    }
    return false;
  }
}
