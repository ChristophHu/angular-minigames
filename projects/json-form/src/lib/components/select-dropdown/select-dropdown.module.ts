import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDropdownComponent } from './select-dropdown.component';
import { FilterByPipe } from '../../pipes/filter-by/filter-by.pipe';
import { LimitToPipe } from '../../pipes/limit-to/limit-to.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectDropdownComponent,
    FilterByPipe,
    LimitToPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectDropdownComponent
  ]
})
export class SelectDropdownModule { }
