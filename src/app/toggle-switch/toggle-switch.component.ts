import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-toggle-switch',
  standalone: true,
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleSwitchComponent),
    multi: true,
  }]
})
export class ToggleSwitchComponent<T> implements ControlValueAccessor {
  selectedValue!: T;
  onChange!: Function;
  onTouched!: Function;

  @ViewChild("chkBox")
  private checkboxControl!: ElementRef<HTMLInputElement>;

  @Input({ alias: "checkedVal", required: true }) checkedValue!: T;
  @Input({ alias: "uncheckedVal", required: true }) uncheckedValValue!: T;

  selectionChanged() {
    const newValue = this.checkboxControl.nativeElement.checked ? this.checkedValue : this.uncheckedValValue;
    this.onChange(newValue);
  }

  writeValue(value: T): void {
    this.selectedValue = value;
    if (this.checkboxControl?.nativeElement)
      this.checkboxControl.nativeElement.checked = (this.checkedValue === value);

    this.onChange?.(value);
  }

  registerOnChange(fn: Function): void {
    this.onChange = (value: T) => fn(value);
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
