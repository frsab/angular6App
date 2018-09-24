import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PubliciteModule } from './publicite/publicite.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PubliciteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
