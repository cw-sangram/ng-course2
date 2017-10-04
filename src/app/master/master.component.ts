import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();
  
  constructor() {

   }
  ngOnInit() {
    this.count = 0;
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
    }
}
