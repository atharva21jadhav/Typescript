import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private _elementRef: ElementRef) 
  { 
    this._elementRef.nativeElement.style.backgroundColor= 'yellow';
    this._elementRef.nativeElement.style.fontWeight= 'bold';
  }

}
