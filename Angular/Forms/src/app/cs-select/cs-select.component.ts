import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-cs-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-select.component.html',
  styleUrl: './cs-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CsSelectComponent),
      multi: true,
    },
  ],
})
export class CsSelectComponent implements ControlValueAccessor {
  @Input() label: string | null = '';
  @Input() List$: any[] | [] = [];
  value: any = null;
  disabled = false;
  isOpen = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
  }

  selectOption(option: any) {
    this.value = option;
    this.onChange(option);
    this.onTouched();
    this.isOpen = false;
  }

  // get selectedLabel() {
  //   return (
  //     this.options.find((o) => o.value === this.value)?.label ?? 'Select...'
  //   );
  // }
}
