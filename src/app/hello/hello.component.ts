import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {

  @Input() count: number;
  @Output() result = new EventEmitter<number>();
  num: number = 0;
  myname = 'sangram';
  constructor() { }

  ngOnInit() {

  }
  increment() {
    this.count++;
    this.result.emit(this.count);
  }

}
