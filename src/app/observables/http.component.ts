import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

 @Component({
   selector: 'app-Http',
   templateUrl: './Http.component.html'
 })
 export class HttpComponent implements OnInit {
  private doctors =  [];
  constructor(http: Http){ 
    http.get('http://jsonplaceholder.typicode.com/users/').
    flatMap((data)=> data.json()).
    subscribe( (value) => this.doctors.push(value));
  }

  ngOnInit(){
    
   }

 }