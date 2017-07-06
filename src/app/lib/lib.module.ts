import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TFLibService } from './services/tflib.service';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { MaterialModule }  from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
  	TextfieldComponent
  ],
  providers : [
  	TFLibService
  ]
})
export class LibModule { }
