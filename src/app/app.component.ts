import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ;
  count:number;
  constructor(){
    this.title="Playground";
    this.count=0;
  }
  counter(){
    this.count++;
  }
}
