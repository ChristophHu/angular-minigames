import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'

import { IconLibraryModule } from 'projects/icon-library/src/public-api';
import { JsonFormModule } from 'projects/json-form/src/public-api';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    // libraries
    IconLibraryModule,
    JsonFormModule
  ],
  exports: [
    CommonModule,
    
    // libraries
    IconLibraryModule,
    JsonFormModule
  ]
})
export class SharedModule { }
