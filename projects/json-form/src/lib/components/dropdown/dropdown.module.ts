import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownTriggerForDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent,
    DropdownTriggerForDirective
  ]
})
export class DropdownModule { }
