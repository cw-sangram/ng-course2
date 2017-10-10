import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

 @Component({
   selector: 'app-HttpSearch',
   templateUrl: './HttpSearch.component.html'
 })
 export class HttpSearchComponent implements OnInit {
  private users = [];
  private txtQuery: string;
  private _http: Http;
  constructor(http: Http){ 
    this._http = http;
  }

  ngOnInit(){
    
   }

   // first try
  search2(query: string) {
    this.users = [];
    var users = this._http.get('https://api.github.com/search/users?q=' + query)
      .map((data: any) => {
        let arr = data.json()['items'];
        console.log(arr);
        return Observable.of(arr);
      }).take(5).
      //.filter((user)=> user.id > 0)
      subscribe((value) => {
        debugger;
          this.users.push(value);
      });
    }

    search(query: string) {
      this.users = [];
      var users = this._http.get('https://api.github.com/search/users?q=' + query)
        .flatMap((data)=> data.json()['items'])
        .take(5)
        .subscribe((value)=> this.users.push(value));
      }
 }