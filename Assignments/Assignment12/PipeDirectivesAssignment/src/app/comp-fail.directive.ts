import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFail]'
})
export class CompFailDirective {

  constructor(private _elementRef: ElementRef) 
  { 

  }

  @HostListener('mouseover') onmouseover()
  {
    this._elementRef.nativeElement.style.color= 'red';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this._elementRef.nativeElement.style.color= 'black';
  }

}
