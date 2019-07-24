import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@tf-test/button';

import { ConversationsComponent } from './conversations.component';

@NgModule({
  declarations: [
    ConversationsComponent
  ],
  exports: [
    ConversationsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class ConversationsModule { }
