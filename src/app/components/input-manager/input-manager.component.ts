import { Component, contentChildren } from '@angular/core';
import { ManagedInputDirective } from './managed-input.directive';

@Component({
  selector: 'app-input-manager',
  standalone: true,
  templateUrl: './input-manager.component.html',
  styleUrl: './input-manager.component.scss',
})
export class InputManagerComponent {
  readonly inputs = contentChildren(ManagedInputDirective);

  clearAll(): void {
    this.inputs().forEach((input: ManagedInputDirective) => {
      input.inputElement.value = '';
    });
  }
}
