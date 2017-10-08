import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { AlertComponent } from './alert.component';
@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html'
})
export class ViewChildComponent implements OnInit {

  @ViewChild(AlertComponent) alertBox : AlertComponent;
  @ViewChildren(AlertComponent) allAlerts : QueryList<AlertComponent>;
  constructor() { }
  clickMe(){
    this.alertBox.show();
  }
  showAll(){
    for (let myAlert of this.allAlerts.toArray()) {
      myAlert.show();
    }
  }
  ngOnInit() {
  }

}
