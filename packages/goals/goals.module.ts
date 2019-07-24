import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@tf-test/button';

import { GoalsComponent } from './goals.component';

@NgModule({
  declarations: [
    GoalsComponent,
  ],
  exports: [
    GoalsComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ]
})
export class GoalsModule { }
