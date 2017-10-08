import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Observable',
  templateUrl: './observable.component.html'
})
export class ObservableComponent {

  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor() {
  }
  
  init() {
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);
          
          setTimeout(() => {
              observer.next(43);
          }, 2000);
          
          setTimeout(() => {
              observer.complete();
          }, 3000);
      });

      let subscription = this.data.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
  }

  setData(){
      this.data = new Observable(observer => {
          setTimeout(() => { observer.next(42); }, 1000);
          setTimeout(() => { observer.next(50); }, 2000);
          setTimeout(() => { observer.complete; }, 1000);
      });

      let mySubscription = this.data.subscribe(
          myValue => this.values.push(myValue),
          myerrors => this.anyErrors = true,
          () => this.finished = true
      );
  }
}