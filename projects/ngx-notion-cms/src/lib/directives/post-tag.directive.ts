import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[libPostTag]',
  standalone: true,
})
export class PostTagDirective {
  element = inject(ElementRef)


}
