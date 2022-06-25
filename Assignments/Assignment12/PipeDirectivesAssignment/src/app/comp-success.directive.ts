import { Directive,  ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private _elementRef: ElementRef) 
  { 

  }

  @HostListener('mouseover') onmouseover()
  {
    this._elementRef.nativeElement.style.color= 'green';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this._elementRef.nativeElement.style.color= 'black';
  }

}
