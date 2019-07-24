import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoalsModule } from '@tf-test/goals';
import { ConversationsModule } from '@tf-test/conversations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoalsModule,
    ConversationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
