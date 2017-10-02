import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();
  episodes = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' }
    ];
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
