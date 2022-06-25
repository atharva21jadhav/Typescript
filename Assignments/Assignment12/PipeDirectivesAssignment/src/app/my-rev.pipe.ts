import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split("").reverse().join("");
  }

}
