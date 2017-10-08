import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-alert',
	template: `
	  <div *ngIf="!hidden">
     <ngb-alert [dismissible]="false">
      <ng-content></ng-content>
     </ngb-alert>
	  </div>`
})
export class AlertComponent {
  hidden = true;
  
  show() {
    this.hidden = false;
  }
  
  hide() {
    this.hidden = true;
  }
}
