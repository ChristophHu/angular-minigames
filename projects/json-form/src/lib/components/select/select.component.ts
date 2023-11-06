import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Options } from '../../models/generic-control';

@Component({
  selector: 'selection',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements AfterViewInit, ControlValueAccessor {
  selectedItem: string = '3';
  // selectedItems: string[] | string = '';
  @Input() items: {label: any, value: any}[] = [];

  private propagateOnChange = (value: string) => {};
  private propagateTouched = (value: string) => {};

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    console.log(this.items)
  }

  writeValue(items: any) {
    // this.selectedItems = items;
    this.selectedItem = items;
    console.log(this.selectedItem)
  }

  registerOnChange(fn: any) {
    this.propagateOnChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

  change(e: any) {
    let index = e.target.options.selectedIndex
    this.selectedItem = e.target.options[index].value;
    const item = this.items.find((item: any) => item.value === this.selectedItem);

    if (item) {
      this.selectedItem = item.value;
      this.propagateOnChange(this.selectedItem);
      this.propagateTouched(this.selectedItem);
    }

    // clear selectedItem once Change Detection finished
    // setTimeout(() => {
    //   this.selectedItem = '3';
    //   // mark this component for Change Detection
    //   this.cdRef.markForCheck();
    // });
  }
}
