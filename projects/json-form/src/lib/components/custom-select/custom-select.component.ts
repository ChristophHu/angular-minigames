import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  id: number,
  value: string
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectComponent,
      multi: true
    }
  ]
})
export class CustomSelectComponent implements AfterViewInit, ControlValueAccessor {

  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>()
  @Input() set name(value: string) {
      // this.shipName = value
  }

  private onChanged!: Function;

  @Input() formControl!: FormControl;
  @Input() formControlName!: string;
  @Input() label!: string;
  @Input() options!: SelectOption[];

  open: boolean = true

  @ViewChild('cmp') cmp: any
  @ViewChild(FormControlDirective, {static: true}) formControlDirective?: FormControlDirective;
  // private value?: string
  private disabled?: boolean
  value: any = ''

  constructor(private controlContainer: ControlContainer) { }
  ngAfterViewInit(): void {
    console.log(this.formControlName)
  }
  
  get control() {
    return this.formControl || this.controlContainer?.control?.get(this.formControlName)
  }

  writeValue(obj: any): void {
    console.log('write')
    this.formControlDirective?.valueAccessor?.writeValue(obj)
  }
  registerOnChange(fn: any): void {
    console.log('change')
    this.formControlDirective?.valueAccessor?.registerOnChange(fn)
  }
  registerOnTouched(fn: any): void {
    console.log('touch')
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn)
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('disables', isDisabled)
    this.disabled = isDisabled;
  }

  change(value: number): void {
    if (this.value !== value) {
      this.value = value;
    } else {
      this.value -= 1;
    }
    this.onChange(this.value);
  }

  // tslint:disable-next-line: typedef
  onChange(value: any) {
    console.log(value)
    // this.change(value);
  }
  // tslint:disable-next-line:typedef
  onTouched() {}

  setValue(text: string) {
    this.cmp.nativeElement.value = text
    this.formControlDirective?.valueAccessor?.writeValue(text)
    this.nameChange.emit(text)
  }
}
