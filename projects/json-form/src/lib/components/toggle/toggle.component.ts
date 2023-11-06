import { Component, OnInit, Input, forwardRef, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() value: boolean = false
  @Input() name: string = ''
  @Input() disabled: boolean = false
 
  @Output() change = new EventEmitter()
  @Output() valueChange = new EventEmitter()
  toggled: boolean = true

  constructor() { }

  ngOnInit() {
    this.setToogle()
  }

  onChange = (_:any) => { }
  onTouch = () => { }

  onInput(value: boolean) {
    this.value = value;
    console.log(this.value, value, 'value')
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
    this.setToogle();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setToogle() {
    this.toggled = this.value
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      if(propName == 'value')
        this.writeValue(chng.currentValue)
    }
  }

  toggle(event: any) {
    console.log('changed')
    const toggled = !this.toggled;
    this.toggled = toggled;

    this.value = this.getValue(toggled)
    this.onTouch();
    this.onChange(this.value);
    this.valueChange.emit(this.value)
  }

  getValue(key: boolean) {
    return key === true ? true : false
  }  
}