import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[ngxPostTag]',
    standalone: true,
})
export class PostTagDirective {
    element = inject(ElementRef);
}
