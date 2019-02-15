import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/Login/Login';
import { page1Component } from '../pages/page1/page1';
import { page2Component } from '../pages/page2/page2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    page1Component,
    page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
