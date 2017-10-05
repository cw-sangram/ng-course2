import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './for-example.component.html'
})
export class ForExampleComponent implements OnInit {

  @Input() listItem;
  constructor() { }

  ngOnInit() {
    console.log('New component created', this.listItem);
  }
}
