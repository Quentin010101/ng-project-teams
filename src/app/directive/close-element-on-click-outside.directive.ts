import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class CloseElementOnClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elm: ElementRef) { }

  @HostListener('document:click', ['$event.target'])

  public onClick(target: HTMLElement) {
    const clickedInside = this.elm.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
