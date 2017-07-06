import { Component } from '@angular/core';
import { TFLibService } from './lib/services/tflib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ TFLibService ]
})
export class AppComponent {
  
  /*constructor(private lib : TFLibService){
  		lib.getData('sdsd');
  }*/ 
}
