import { CommonModule } from '@angular/common';
import { Component, Inject, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-cs-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cs-input.component.html',
  styleUrl: './cs-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsInputComponent),
      multi: true,
    },
  ],
})
export class CsInputComponent implements ControlValueAccessor {
  @Input() label: string | null = '';
  @Input() id: string | null = '';
  @Input() placeholder: string | null = ' ';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value = '';
  disabled = false;

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    // this.onChange(value);
  }
  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  handleBlur() {
    this.onTouched();
  }
}
