import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechnenComponent } from './rechnen.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: RechnenComponent }
]

@NgModule({
  declarations: [
    RechnenComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RechnenModule { }
