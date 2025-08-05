import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'input[appManaged]',
  standalone: true,
})
export class ManagedInputDirective {
  readonly inputElement = inject(ElementRef<HTMLInputElement>).nativeElement;
}
