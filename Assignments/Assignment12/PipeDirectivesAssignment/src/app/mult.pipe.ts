import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult'
})
export class MultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value * args[0];
  }

}
