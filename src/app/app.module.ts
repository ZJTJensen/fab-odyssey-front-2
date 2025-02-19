// filepath: /c:/Users/ZJTJe/Documents/fab-2/fab-odyssey-front-2/src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // other modules
  ],
  providers: [],
})
export class AppModule { }