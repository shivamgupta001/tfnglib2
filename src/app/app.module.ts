import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibModule } from './lib/lib.module';
import { TFLibService } from './lib/services/tflib.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibModule
  ],
  providers: [
  	TFLibService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
