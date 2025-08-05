import { Component, ElementRef, viewChild } from '@angular/core';
import { InputManagerComponent } from './components/input-manager/input-manager.component';
import { ManagedInputDirective } from './components/input-manager/managed-input.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputManagerComponent, ManagedInputDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly input = viewChild.required('txtInput', {
    read: ElementRef<HTMLInputElement>,
  });

  onSelect(): void {
    this.input().nativeElement.focus();
    this.input().nativeElement.select();
  }
}
