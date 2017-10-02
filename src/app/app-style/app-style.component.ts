import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  template: `<p 
  [ngStyle]="alertStyle">
  <ng-content></ng-content>
  </p>`
})
export class AppStyleComponent implements OnInit {

  borderStyle = '1px solid black';
  alertStyle;
  constructor() { }

  ngOnInit() {
    this.alertStyle = {'color':'red', 'font-weight':'bold', 'border': this.borderStyle};
  }

}
